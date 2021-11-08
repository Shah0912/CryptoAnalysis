import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useState } from 'react';

const Tab2: React.FC = () => {

  const [cipherText, setCipherText] = useState("");
  const [decrpytedText, setDecryptedText] = useState("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Frequency Analysis</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Frequency Analysis</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel position="stacked">Cipher Text</IonLabel>
          <IonTextarea autoGrow={true} value={cipherText} onIonChange={e=>setCipherText(e.detail.value!)}></IonTextarea>
        </IonItem>
        <IonButton>Analyze</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
