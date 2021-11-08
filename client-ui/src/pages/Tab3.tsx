import { IonButton, IonCheckbox, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { useState } from 'react';
import axios from 'axios';
import { SERVER_ROUTES_URI } from '../constants';

const Tab3: React.FC = () => {

  interface cipherTextObject {
    key: string;
    confidence: number;
    language: string;
    plaintext: string;
  }

  const [checked, setChecked] = useState(false);
  const [cipherText, setCipherText] = useState("");
  const [decrpytedText, setDecryptedText] = useState("");
  const [solution, setSolution] =  useState <cipherTextObject[]> ([]);
  // const [solution, setSolution] = useState();


  // var x = {
  //   1: ["Hi this is Aditya", "en", 95], 
  // }



  async function handleBruteForce() {
    try {
      const response = await axios.get(SERVER_ROUTES_URI + "bruteforce", {params: {'ciphertext': cipherText, 'giveAll': checked}})
      console.log("response = ", response.data);

      console.log("values = ", Object.values(response.data))
      setSolution(Object.values(response.data));
      // setSolution(response.data)
      console.log("solution = ", solution);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Brute Force</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Brute Force</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel position="stacked">Cipher Text</IonLabel>
          <IonTextarea autoGrow={true} value={cipherText} onIonChange={e=>setCipherText(e.detail.value!)}></IonTextarea>
        </IonItem>
        <IonItem>

          <IonCheckbox slot="start" color="primary" checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
          <IonLabel>Get All possible solutions</IonLabel>
        </IonItem>
        <IonButton onClick={()=>{handleBruteForce();}}>Analyze</IonButton>
        <IonList>
          <IonListHeader>Possible Solutions</IonListHeader>
          {
            solution.map((x: cipherTextObject) => {
              return (
                <IonLabel>
                  <p>{x.key}: {x.plaintext} {x.confidence} {x.language}</p>
                </IonLabel>
              );
            })
          }
        </IonList>
        

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
