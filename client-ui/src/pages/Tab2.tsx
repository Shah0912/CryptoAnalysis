import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useState } from 'react';
import { SERVER_ROUTES_URI } from '../constants';
import axios from 'axios';

const Tab2: React.FC = () => {

  interface cipherTextObject {
    key: number;
    order: number;
    plaintext: string;
  }

  const [cipherText, setCipherText] = useState("");
  const [ub, setUb] = useState(1);
  const [solution, setSolution] =  useState <cipherTextObject[]> ([]);
  

  async function handleFrequencyAnalysis() {
    try {
      const response = await axios.get(SERVER_ROUTES_URI + "frequency_analysis", {params: {'ciphertext': cipherText, 'numResults': ub}})
      console.log("response = ", response.data);
      setSolution(Object.values(response.data));
    }
    catch (err) {
      console.log(err);
    }
  }


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
        <IonItem>
          <IonLabel position="stacked">Enter the number of best possible solutions</IonLabel>
          <IonInput type="number" max="26" min="0" inputMode="numeric" value={ub} onIonChange={e=>setUb(parseInt(e.detail.value!))}></IonInput>
        </IonItem>
        <IonButton onClick={()=>{handleFrequencyAnalysis();}}>Analyze</IonButton>
        <IonList>
          <IonListHeader>Possible Solutions</IonListHeader>
          {
            solution.map((x: cipherTextObject) => {
              return (
                <IonLabel>
                  <p>{x.key}: {x.plaintext}</p>
                </IonLabel>
              );
            })
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
