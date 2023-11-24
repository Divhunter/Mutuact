import { validationResult } from 'express-validator';
import * as projetService from '../services/projetService.js';
import axios from 'axios';
import { logger } from '../logger/index.js';
import { sendMeMail } from '../services/mailService.js';

// Obtenir tous les projets
export const getAllProjets = async (req, res) => {
    try {
        const projets = await projetService.getAllProjets();
        res.status(200).json(projets);
    } catch (error) {
        logger.error(error);
        res.status(500).json({ success: false, error: "Erreur lors de la récupération des projets." });
    }
};

// Obtenir un projet par e-mail
export const getProjetByEmail = async (req, res) => {
    const email = req.query.email;
    try {
        const projet = await projetService.getProjetByEmail(email);
        if (!projet) {
            return res.status(404).json({ error: "Projet non trouvé." });
        }
        res.status(200).json(projet);
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: "Erreur lors de la récupération du projet." });
    }
};

// Obtenir un projet par son ID
export const getProjetById = async (req, res) => {
    const projetId = req.query.projetId;
    try {
        const projet = await projetService.getProjetById(projetId);
        if (!projet) {
            return res.status(404).json({ error: "Projet non trouvé." });
        }
        res.status(200).json(projet);
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: "Erreur lors de la récupération du projet." });
    }
};

// Créer un nouveau projet
export const createProjet = async (req, res) => {
    const projetData = req.body;
    const userResponse = req.body['recaptchaResponse'];
    const fullName = `${projetData.firstName} ${projetData.lastName}`
    try {
        // Récupérez les erreurs de validation s'il y en a.
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.error('Validation errors:', errors.array()); // Envoie les erreurs dans le logger
            return res.status(400).json({ success: false, error: errors.array() });
        }

        // Utilisez Axios pour valider le reCAPTCHA
        const secretKey = process.env.SECRET_KEY_RECAPTCHA;
        const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify';

        const response = await axios.post(verificationUrl, null, {
            params: {
                secret: secretKey,
                response: userResponse,
            },
        });

        const data = response.data;

        if (data.success) {
            // Le reCAPTCHA a été validé avec succès, vous pouvez continuer le traitement du formulaire.
            const newProjet = await projetService.createProjet(projetData);
            // Envoyer la notification à travers Socket.IO une fois le projet sauvegardé
            if (newProjet) {

                await sendMeMail({
                    name: fullName,
                    email: projetData.email,
                    message: projetData.message
                });
                console.log('Projet enregistré!')
                res.status(200).json({ success: true, data: newProjet, message: "Votre projet a bien été sauvegardé!" });
                
            } else {
                console.log('Erreur lors de la création du projet.')
                res.status(500).json({ success: false, error: 'Erreur lors de la création du projet.' });
            }
        } else {
            // Le reCAPTCHA a échoué, vous devez empêcher la soumission du formulaire.
            logger.error('la validation CAPTCHA a echouee');
            res.status(403).json({ success: false, error: `La validation du CAPTCHA a échouée`, message: "Veuillez révalider le CAPTCHA" });
        }
    } catch (error) {
        logger.error('Erreur lors de la création du projet:', error);
        res.status(500).json({ success: false, error: 'Erreur lors de la création du projet.' });
    }
};


// Mettre à jour un projet
export const updateProjet = async (req, res) => {
    const { email } = req.query;
    const projetData = req.body;

    try {
        const updatedProjet = await projetService.updateProjetByEmail(email, projetData);
        if (!updatedProjet) {
            return res.status(404).json({ error: 'Projet non trouvé.' });
        }
        res.json({ success: true, data: updatedProjet, message: "Le projet a été mis à jour!" });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Erreur lors de la mise à jour du projet.' });
    }
};

// Supprimer un projet par ID
export const deleteProjet = async (req, res) => {
    const projetId = req.query.projetId;

    try {
        const deletedProjet = await projetService.deleteProjetById(projetId);
        if (!deletedProjet) {
            return res.status(404).json({ error: 'Projet non trouvé.' });
        }
        res.json({ success: true, data: deletedProjet, message: `Le projet "${deletedProjet.projet}" est bien supprimé!` });
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: 'Erreur lors de la suppression du projet.' });
    }
};

// Fonction pour marquer une notification comme lue
export const markNotificationAsRead = async (req, res) => {
    const projetId = req.query.projetId;
    logger.info(projetId)
    try {
        const updatedIsReadProjet = await projetService.markNotificationAsRead(projetId);
        if (!updatedIsReadProjet) {
            return res.status(404).json({ error: 'Projet non trouvé.' });
        }
        logger.info(`Le projet ${projetId} est lu`)

        res.status(200).json({
            success: true,
            data: updatedIsReadProjet,
            message: 'Projet marqué comme lu avec succès.',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: `Erreur lors du marquage du projet comme lu: ${error}`,
        });
        logger.error(`Erreur lors du marquage du projet comme lu: ${error}`)
    }
};





