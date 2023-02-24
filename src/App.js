import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import WatchPage from "./components/WatchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

{
  /* <div className="w-5/6">
          <h3>
            Click here to Subscribe to Taarak Mehta Ka Ooltah Chashmah Official
            Channel:
            https://www.youtube.com/taarakmehtakaooltahchashmah?sub_confirmation=1
            \n\nClick here to watch all your favorite Episode videos: <br />
            {show ? (
              <button
                className="border-2 font-bold"
                onClick={() => setshow(false)}
              >
                Show less
              </button>
            ) : (
              <button
                className="border-2 font-bold"
                onClick={() => setshow(true)}
              >
                Show More...
              </button>
            )}
            {show && (
              <p>
                \n\nWe bring to you the best videos from your favorite show
                Taarak Mehta Ka Ooltah Chashmah. So, get your daily dose of
                laughter with Jethalal, Taarak Mehta, Daya, Champaklal and their
                neighbors in Gokuldham Society.\n\nAbout Taarak Mehta Ka Ooltah
                Chashmah:\n--------------------------------------------------------------------\nThe
                show is inspired from the famous humorous column 'Duniya Ne
                Undha Chasma' written by the eminent Gujarati writer Mr. Tarak
                Mehta. This story revolves around daily happenings in
                \"Gokuldham Co-operative Society\" and covers topical issues
                which are socially relevant. The show predominantly - revolves
                around 'Jethalal' (Dilip Joshi) who is an uneducated Gujarati
                businessman. Your 'Taarak Mehta' (Shailesh Lodha), is his
                neighbor. 'Jethalal' finds a friend and philosopher in 'Taarak
                Mehta' and often goes to him for advice whenever he is in
                trouble. Jethalaal's family includes his simpleton wife 'Daya
                Ben' (Disha Wakani) and a mischievous son 'Tapu' (Bhavya Gandhi
                / Raj Anadkat). Tapu is a menace and a constant source of
                trouble to all the members of Gokuldham. They have often warned
                'Jethalal' to reform 'Tapu' or else be prepared to leave the
                premises. Lost hopes of being heard by his son push Jethalaal'
                to call his father 'Champaklal' (Amit Bhatt) from the village.
                This was his great idea of leashing some control over the
                mischievous Tapu. The opposite happens and the grandfather joins
                hands with the grandson to make life a roller coaster
                troublesome ride for Jethalal.\n\nCast:\n---------\nDilip Joshi
                as Jethalal Champaklal Gada\nDisha Vakani as Daya Jethalal
                Gada\nRaj Anadkat / Bhavya Gandhi as Tipendra Jethalal Gada
                (Tapu) \nAmit Bhatt as Champaklal Jayantilal Gada\nShailesh
                Lodha as Taarak Mehta\nSunayana Fozdar / Neha Mehta as Anjali
                Taarak Mehta\nTanuj Mahashabde as Krishnan Subramaniam
                Iyer\nMunmun Dutta as Babita Krishnan Iyer\nMandar Chandwadkar
                as Aatmaram Tukaram Bhide\nSonalika Joshi as Madhvi Aatmaram
                Bhide\nNidhi Bhanushali / Palak Sidhwani as Sonalika Aatmaram
                Bhide (Sonu) \nGurucharan Singh/ Balwinder suri as Roshan Singh
                Harjeet Singh Sodhi\nJennifer Mistry Bansiwal as Roshan Kaur
                Roshan Singh Sodhi\nKavi Kumar Azad / Nirmal Soni as Dr. Hansraj
                Hathi \nAmbika Ranjankar as Komal Hansraj Hathi\nKush Shah as
                Gulabkumar Hansraj Hathi (Goli)\nShyam Pathak as Popatlal
                Pandey\nSharad Sankla as Abdul\nAzhar Shaikh as Pinku
                \nGhanshyam Nayak as Nattu Kaka\nTanmay Vekaria as Bagha\nMonika
                Bhadoriya as Bawri\n\nProduced By: Neela Asit Modi, Asit Kumarr
                Modi \nSpecial Thanks: Mahesh Vakil, Indu Tarak Mehta\nSet
                Design: Jayant Deshmukh\nOn-Air Promotion ( SAB): SAB
                OAP\nCostume Designer: Alka Mehta\nCostume Stylist: Ekta
                Brahmbhatt\nSound Recordist: Shakeel Mansuri \nCameraman: Aamir
                Virani\nProduction Head: Arvind Marchande\nProduction Controler:
                Vinod Shishupal\nBackground Music: Sunil Patni\nOnline Editors:
                Vishal Tambe, Sandeep Singh \nExecutive Producer: Jatin Yogesh
                Bajaj\nEditor: Dinesh Gosavi, Kaushal Mistry, Devang Modi, Vinod
                Maurya\nCreative Supervision: Krunal Khakhkhar\nOperation Head:
                Sohil Ramani\nWritten By: Raju Odedra & Rajen
                Upadhyay\nDirectors: Harshad Joshi, Malav Suresh
                Rajda\n\nTelevision Adaptation and Designed By: Asit Kumarr
                Modi\n\nMore Useful Links :\n * Like us on Facebook :
                http://www.facebook.com/tmkoc.sabtv\n* Follow us on Instagram :
                http://www.instagram.com/taarakmehtakaooltahchashmahnfp\n *
                Follow us on Twitter : http://www.twitter.com/tmkoc_ntf\n* Visit
                us at : http://www.tmkoc.com\n\n#tmkoc #taarakmehta
                #tmkocsmileofindia",
              </p>
            )}
          </h3>
        </div> */
}
