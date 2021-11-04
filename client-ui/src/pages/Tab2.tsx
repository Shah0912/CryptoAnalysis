import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
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
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel position="stacked">Cipher Text</IonLabel>
          <IonTextarea></IonTextarea>
        </IonItem>
        <IonButton>Analyze</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
