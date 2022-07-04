import FileRow from "./fileRow/fileRow"
import "./fileExplorer.css";
export default function Explorer(props) {
    const elements = [];
    elements.push(<FileRow fileName={`Name`} fileDate={`Date`} fileSize={`Size`} type={'dark'}/>);
    let index = 0;
    props.fileList.forEach(file => {
        elements.push(<FileRow fileName={file.name} fileDate={file.date} fileSize={file.size} type={index%2 === 0 ? 'light' : 'dark'}/>);
        index++;
    });
    return (
        <div className="file-explorer">
            {elements}
        </div>
    );
}