import './MenuModal.css';
import Sections from './Sections';

export default function MenuModal({handleToggleModal}) {
    return (
        <div className = "menu-modal-overlay" onClick = {handleToggleModal}>
            <div className = "menu-modal">
                {/* make an X button for closing the modal */}
                <Sections className = "shortcuts-options-modal" parentSection = "modal"/>
            </div>
        </div>
    )
}