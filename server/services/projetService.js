import { logger } from '../logger/index.js';
import Message from '../models/Message.js';
import Projet from '../models/Projet.js'

// Obtenir tous les projets
export async function getAllProjets() {
    try {
        const projets = await Projet.find().sort({ createdDate: -1 });
        return projets;
    } catch (error) {
        throw error;
    }
}

// Obtenir un projet par son ID
export async function getProjetById(projetId) {
    try {
        const projet = await Projet.findById(projetId);
        return projet;
    } catch (error) {
        throw error;
    }
}

// Obtenir un projet par le prénom
export async function getProjetByEmail(email) {
    try {
        const projets = await Projet.findOne({ email });
        return projets;
    } catch (error) {
        throw error;
    }
}
// Créer un nouveau projet

export async function createProjet(projetData) {
    try {
        const existingProjet = await Projet.findOne({ email: projetData.email });
        if (existingProjet) {
            existingProjet.messages.push({
                content: projetData.message? projetData.message : 'N/R',
                createdDate: new Date(),
                isRead: false, // Ajout du champ isRead
            });
            existingProjet.isRead = false;
            existingProjet.createdDate = new Date();
            existingProjet.updatedDate = new Date();
            await existingProjet.save();
            console.log("saved exist projet")
            // io.emit('updatedProjet', existingProjet);
            logger.info("Une notification vient d'etre envoyé au client.")
            return existingProjet;
        } else {
            const newProjet = await Projet.create({
                firstName: projetData.firstName,
                lastName: projetData.lastName,
                email: projetData.email,
                phone: projetData.phone,
                messages: [{
                    content: projetData.message? projetData.message : 'N/R',
                    createdDate: new Date(),
                    isRead: false, // Ajout du champ isRead
                }],
                createdDate: new Date(),
                updatedDate: new Date()

            });
            // io.emit('nouveauProjet', newProjet);
            console.log('saved new projet')
            logger.info("Une notification vient d'etre envoyé au client.")
            return newProjet;
        }
    } catch (error) {
        console.log(error);
    }
}


// Mettre à jour un projet par son email si le projet existe deja
export async function updateProjetByEmail(email, projetData) {
    try {
        const projetExist = await getProjetByEmail(email)
        let projetToUpdate = {};
        if (!projetExist) {
            return projetExist;
        }

        const projetId = projetExist._id;

        projetToUpdate = {
            ...projetData,
            email: projetExist.email,
            createdDate: projetExist.createdDate,
            updatedDate: new Date()
        };


        const projetMaj = await Projet.findByIdAndUpdate(projetId, projetToUpdate, { new: true });
        return projetMaj;
    } catch (error) {
        throw error;
    }
}


// Supprimer un projet par son ID
export async function deleteProjetById(projetId) {
    try {
        const deletedProjet = await Projet.findByIdAndDelete(projetId);
        return deletedProjet;
    } catch (error) {
        throw error;
    }
}

// Supposons que vous ayez une méthode pour marquer une notification comme lue
export async function markNotificationAsRead(projetId) {
    try {
        const projet = await Projet.findByIdAndUpdate(projetId, { isRead: true }, { new: true });
        if (projet) {
            const messages = await Message.find({ projetId: projet._id });

            messages.forEach(async (message) => {
                message.isRead = true;
                await message.save({ suppressWarning: true });
            });
        }
        return projet;
    } catch (error) {
        console.error("Erreur lors de la mise à jour du projet comme lu :", error);
        throw error;
    }
};


