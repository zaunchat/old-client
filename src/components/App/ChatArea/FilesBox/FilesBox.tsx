import { h } from "preact";
import { X } from "tabler-icons-react";
import styles from "../../../../styles/App/ChatArea.module.css";

export const FilesBox = ({
  files,
  setFiles,
}: {
  files: any[];
  setFiles: any;
}) => {
  const deleteFile = (file: any) => {
    const index = files.indexOf(file);
    if (index > -1) {
      const _files = files.slice();
      _files.splice(index, 1);
      setFiles(_files);
    }
  };
  return files.length > 0 ? (
    <div className={styles.filesBoxContainer}>
      <div className={styles.filesBox}>
        {files.map((file: any) => (
          <div className={styles.fileContainer}>
            <div className={styles.file}>
              <div className={styles.attachmentContainer}>
                <img
                  src="https://media.discordapp.net/attachments/986814674173579335/990537806965248030/unknown.png?width=1272&height=682"
                  className={styles.attachment}
                />
              </div>
              <div className={styles.fileTitle}>{file.title}</div>
              <div
                onClick={() => deleteFile(file)}
                className={styles.fileDelete}
              >
                <X size={24} color={"#FC4754"} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div></div>
  );
};
