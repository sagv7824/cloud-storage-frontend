
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import SettingsIcon from '@mui/icons-material/Settings';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import './sidebar.css';

export default function Sidebar() {
    return (
        <nav className="sidebar-items-container">
            {/* <ul> */}
                <div className="sidebar-item"><DevicesOtherIcon/><span className="item-name">devices</span></div>
                <div className="sidebar-item"><AddToQueueIcon/><span className="item-name">add device</span></div>
                <div className="sidebar-item"><SettingsIcon/><span className="item-name">settings</span></div>
                <div className="sidebar-item"><BrowseGalleryIcon/><span className="item-name">browse files</span></div>
                <div className="sidebar-item"><CloudUploadIcon/><span className="item-name">upload file</span></div>
                
            {/* </ul> */}
        </nav>
    );
}