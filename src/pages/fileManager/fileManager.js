import Explorer from "../../components/fileExplorer/fileExplorer";
import Sidebar from "../../components/sidebar/sidebar";
export default function FileManager() {
    const elements = [];
    for(let i = 1; i < 31; i++) {
        elements.push({size: `${i} MB`, date: `${i}/04/2001`, name: `file ${i}`});
    }
    // return (
    //     <Explorer fileList={elements}/>
    // );
    return (
        <Sidebar/>
    );
}