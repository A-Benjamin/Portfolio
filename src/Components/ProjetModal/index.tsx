import styles from './index.module.css';
import Modal from '@mui/material/Modal';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Projet from '../../Type/Projet';

interface ProjetModalProps {
    open: boolean;
    onClose: () => void;
    projet?: Projet;
}

export default function ProjetModal(props: ProjetModalProps) {
    const handleClose = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
        props.onClose();
    };

    return (
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.modal}>
                <IconButton 
                    className={styles.closeButton}
                    onClick={props.onClose}
                    aria-label="Fermer la modal"
                >
                    <CloseIcon />
                </IconButton>
                
                <div className={styles.modalContent}>
                    <div className={styles.titre}>
                        <h2 id="modal-modal-title">{props.projet?.title}</h2>
                        <div className={styles.image}>
                            <img 
                                src={props.projet?.img} 
                                alt={`Illustration du projet ${props.projet?.title}`}
                            />
                        </div>
                    </div>

                    <div className={styles.projetContent}>
                        {props.projet?.page}
                    </div>
                </div>
            </Box>
        </Modal>
    );
}