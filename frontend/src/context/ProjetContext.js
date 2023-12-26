import React, { createContext, useState } from 'react'
import { getAllProjets, deleteProjet, isReadProjet } from '../services/projetServices'

export const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
  const [projets, setProjets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const token = localStorage.getItem('token')

  // Récupérer tous les projets
  const fetchProjets = async () => {
    if (token) {
      try {
        const response = await getAllProjets(token)
        // console.log(response)
        setProjets(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des projets :', error)
      } finally {
        setIsLoading(false); // Fin du chargement, quelle que soit l'issue
      }
    }
  };

  // Supprimer un projet
  const handleDeleteProjet = async (projetId) => {
    if (token) {
      try {
        await deleteProjet(projetId, token);
        // Mettez à jour la liste des projets localement en la filtrant pour exclure le projet supprimé
        setProjets((prevProjets) =>
          prevProjets.filter((projet) => projet._id !== projetId)
        );
      } catch (error) {
        console.error('Erreur lors de la suppression du projet :', error)
      }
    }
  };


  const handleIsReadProjetProjet = async (projetId) => {
    if (token) {
      try {
        // Mettre à jour le champ 'isRead' sur le serveur
        const isRead = await isReadProjet(projetId, token);
        // Mettre à jour localement le champ 'isRead' dans les données du projet dans le contexte
        if (isRead) {
          const updatedProjects = projets.map(project => {
            if (project._id === projetId) {
              return { ...project, isRead: true };
            }
            return project;
          });
          setProjets(updatedProjects);
        }

        // Mettre à jour l'état des projets dans le contexte avec le champ 'isRead' mis à jour
      } catch (error) {
        console.error('Erreur lors de la mise à jour du projet comme lu :', error);
      }
    }
  };


  return (
    <ProjectContext.Provider value={{ projets, isLoading, setIsLoading, fetchProjets, handleDeleteProjet, setProjets, handleIsReadProjetProjet }}>
      {children}
    </ProjectContext.Provider>
  );
};
