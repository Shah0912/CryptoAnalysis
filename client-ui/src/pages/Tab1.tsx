import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Encrpyt/ Decrypt</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItemDivider>Encryption</IonItemDivider>
        <IonItem>
          <IonLabel position="stacked">Plaintext</IonLabel>
          <IonTextarea autoGrow={true}></IonTextarea>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Key</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonButton>Encrypt</IonButton>
        <IonItem>
          <IonLabel position="stacked">CipherText</IonLabel>
          <IonTextarea autoGrow={true} readonly></IonTextarea>
        </IonItem>
        

        <IonItemDivider>Decryption</IonItemDivider>
        <IonItem>
          <IonLabel position="stacked">Cipher Text</IonLabel>
          <IonTextarea></IonTextarea>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Key</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonButton>Decrypt</IonButton>
        <IonItem>
          <IonLabel position="stacked">Decrypted Text</IonLabel>
          <IonTextarea readonly></IonTextarea>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
