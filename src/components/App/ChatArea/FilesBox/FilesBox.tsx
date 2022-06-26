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
                  src="https://cdn.discordapp.com/avatars/508449321176268801/7d9bd3f6f57b4d72ee105a93a984e098.png?size=1024"
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
