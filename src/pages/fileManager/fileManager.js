import Explorer from "../../components/fileExplorer/fileExplorer";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import "./fileManager.css";
export default function FileManager() {
    const elements = [];
    for(let i = 1; i < 31; i++) {
        elements.push({size: `${i} MB`, date: `${i}/04/2001`, name: `file ${i}`});
    }
    // return (
    //     <Explorer fileList={elements}/>
    // );
    return (
        <div className="file-manager-root-container">
            <div className="file-manager-navbar-container">
                <Navbar/>
            </div>
            <div className="file-manager-explorer-container">
                    <div className="file-manager-sidebar"><Sidebar/></div>
                    <div className="file-manager-explorer"><Explorer fileList={elements}/></div>
            </div>
        </div>
    );
}