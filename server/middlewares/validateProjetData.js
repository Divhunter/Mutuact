import { body } from 'express-validator'

// Middleware de validation pour la création de projet
// Expressions régulières

const matchFirstName = /^[a-zA-ZÀÁÂÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâæçèéêëìíîïñòóôõöùúûüý -]+$/
const errorFirstName = "Le prénom ne correspond pas au format attendu"

const matchLastName = /^[a-zA-ZÀÁÂÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝàáâæçèéêëìíîïñòóôõöùúûüý -]+$/
const errorLastName = "Le nom ne correspond pas au format attendu"

const matchEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
const errorEmail = "L'adresse électronique n'est pas valide"

const matchPhone = /^\+?\d{9,14}(?:[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})?$/;
const errorPhone = "Le numéro télephone n'est pas valide"

const matchMessage = /^[a-zA-Zéèêîçàôïùû0-9]+(?:['\s\-?,:!%"@;’=°_()&$€.a-zA-Zéèêîçàôïûù0-9]+)*$/
const errorMessage = 'Le message doit contenir des caractères valides, certains caractère spéciaux sont non autorisés.'
const noAuthorizeChar = /^[^{}|<|>|`]*$/

// Utilisez les regex dans le middleware de validation
const validateProjetData = [
  
  // Champ obligatoire
  body('firstName').notEmpty().isString().matches(matchFirstName).withMessage(errorFirstName)
  .isLength({ min: 3, max: 30 }).withMessage('Le champ Prénom doit contenir entre 3 et 30 caractères'),

  // Champ obligatoire
  body('lastName').notEmpty().isString().matches(matchLastName).withMessage(errorLastName)
  .isLength({ min: 3, max: 30 }).withMessage('Le champ Nom doit contenir entre 3 et 30 caractères'),

  // Champ obligatoire
  body('email').notEmpty().isEmail().matches(matchEmail).withMessage(errorEmail),

// Champ facultatif
  body('phone')
  .custom((value, { req }) => {
    if (value && value.trim() !== '' && !matchPhone.test(value)) {
      req.errors.push(errorPhone) // Ajoutez le message d'erreur à l'array d'erreurs
      return false
    }
    return true
  }),

  // Champ facultatif
  body('message')
    .optional()
    .isLength({ min: 0, max: 500 }).withMessage('Le champ Message doit contenir au maximum 500 caractères')
    .custom((value, { req }) => {
       // Initialisation de req.errors si ce n'est pas déjà fait
    if (!req.errors) {
      req.errors = [];
    }
      if (value && value.trim() !== '' && !noAuthorizeChar.test(value)) {
        req.errors.push(errorMessage) // Ajoutez le message d'erreur à l'array d'erreurs
        return false
      }
      return true
    }),

 
];

export default validateProjetData





