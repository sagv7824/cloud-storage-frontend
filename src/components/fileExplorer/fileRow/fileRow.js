import "./fileRow.css";

export default function FileRow(props) {
    const rowType = props.type === 'light' ? 'file-row-light' : 'file-row-dark';
    return (
        <div className={rowType}>
            <div className="file-name"><span>{props.fileName}</span></div>
            <div className="file-created-date"><span>{props.fileDate}</span></div>
            <div className="file-size"><span>{props.fileSize}</span></div>
        </div>
    );
}