// erviceList.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";


const data = [
  //Book Data here
  { id: "1", title: "Literary fiction", image: 'https://static.bookofthemonth.com/cdn-cgi/image/fo…om/covers/list/LikeMotherLikeDaughter_200x300.jpg',author:"Kimberly McCreight",
    Description:"A daughter races to uncover her mother's secret life in the wake of her disappearance in this thriller.When Cleo, a student at NYU, arrives late for dinner at her childhood home in Brooklyn, she finds food burning in the oven and no sign of her mother, Kat. Then Cleo discovers her mom’s bloody shoe under the sofa. Something terrible has happened.But what? The polar opposite of Cleo, whose “out of control” emotions and “unsafe” behavior have created a seemingly unbridgeable rift between mother and daughter, Kat is the essence of Park Slope perfection: a happily married, successful corporate lawyer. Or so Cleo thinks.Kat has been lying. She’s not just a lawyer; she’s her firm’s fixer. She’s damn good at it, too. Growing up in a dangerous group home taught her how to think fast, stay calm under pressure, and recognize a real threat when she sees one. And in the days leading up her disappearance, Kat has become aware of multiple threats: demands for money from her unfaithful  it’s too late.",price:" ₹250"},
  { id: "2", title: "Literary fiction", image: 'https://static.bookofthemonth.com/cdn-cgi/image/fo…onth.com/covers/list/FiveStarStranger_200x300.jpg',author:"Kat Tang", Description:"In an age where online ratings are all-powerful, Five-Star Stranger follows the adventures of a top-rated man on the Rental Stranger app—a place where users can hire a pretend fiancé, a wingman, or an extra mourner for a funeral. Referred to only as Stranger, the narrator navigates New York City under the guise of characters he plays, always maintaining a professional distance from his clients.But, when a nosy patron threatens to upend his long-term role as father to a young girl, Stranger begins to reckon with his attachment to his pretend daughter, her mother, and his own fraught past. Now, he must confront the boundaries he has drawn and explore the legacy of abandonment that shaped his life Five-Star Stranger is a strikingly vivid novel about the commodification of relationships in a gig economy, isolation in a hyperconnected world, and the risk of asking for what we want from those who cannot give. This is the story of a man who finds out who he is by being anyone but himself.", price:"₹300" },
  { id: "3", title: 'Fantasy', image: 'https://static.bookofthemonth.com/cdn-cgi/image/fo…themonth.com/covers/list/TheLostStory_200x300.jpg', author:"Meg Shaffer", Description:"As boys, best friends Jeremy Cox and Rafe Howell went missing in a vast West Virginia state forest, only to mysteriously reappear six months later with no explanation for where they’d gone or how they’d survived.Fifteen years after their miraculous homecoming, Rafe is a reclusive artist who still bears scars inside and out but has no memory of what happened during those months. Meanwhile, Jeremy has become a famed missing persons’ investigator. With his uncanny abilities, he is the one person who can help vet tech Emilie Wendell find her sister, who vanished in the very same forest as Rafe and Jeremy.Jeremy alone knows the fantastical truth about the disappearances, for while the rest of the world was searching for them, the two missing boys were in a magical realm filled with impossible beauty and terrible danger. He believes it is there that they will find Emilie’s sister. However, Jeremy has kept Rafe in the dark since their return for his own inscrutable reasons. But the time for burying secrets comes to an end as the quest for Emilie’s sister begins. The former lost boys must confront their shared past, no matter how traumatic the memories.Alongside the headstrong Emilie, Rafe and Jeremy must return to the enchanted world they called home for six months—for only then can they get back everything and everyone they’ve lost.", price:"₹300" },
  { id: "4", title: "fiction", image: 'https://static.bookofthemonth.com/cdn-cgi/image/fo…onth.com/covers/list/TheGodOfTheWoods_200x300.jpg', author:"Liz Moore", Description:"Early morning, August 1975: a camp counselor discovers an empty bunk. Its occupant, Barbara Van Laar, has gone missing. Barbara isn’t just any thirteen-year-old: she’s the daughter of the family that owns the summer camp and employs most of the region’s residents. And this isn’t the first time a Van Laar child has disappeared. Barbara’s older brother similarly vanished fourteen years ago, never to be found.",price:"₹300"
 },
  { id: "5", title: "Historical", image: 'https://static.bookofthemonth.com/cdn-cgi/image/fo…tic.bookofthemonth.com/covers/list/GreatAlone.jpg', author:"Kristin Hannah", Description:"Ernt Allbright, a former POW, comes home from the Vietnam war a changed and volatile man. When he loses yet another job, he makes an impulsive decision: he will move his family north, to Alaska, where they will live off the grid in America’s last true frontier.", },
  { id: "6", title: "Fiction", image: 'https://static.bookofthemonth.com/cdn-cgi/image/fo…emonth.com/covers/list/TheWishingGame_200x300.jpg',author:"Meg Shaffer", Description:"Lucy Hart knows better than anyone what it’s like to grow up without parents who loved her. In a childhood marked by neglect and loneliness, Lucy found her solace in books, namely the Clock Island series by Jack Masterson.", price:"₹350"}];

const ServiceList = () => {
  const navigate = useNavigate();

  return (
    <section id="services-list" className="services-list">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <p>"BookHive- Where every book finds its place, and every reader finds their hive."</p>
        </div>
        <div className="row gy-5">
          {data.map((book) => (
            <div key={book.id} className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
              <div className="single-service text-center">
                <div className="icon flex-shrink-0">
                  <img src={book.image} alt={book.title} className="img-fluid mb-3 fixed-size" />
                </div>
                <h4 className="title">
                  <Link to="#" className="stretched-link">{book.title}</Link>
                </h4>
                <button 
                  style={{ zIndex: '15' }} 
                  className="btn btn-primary" 
                  onClick={() => navigate('/read-more/', {state:{book}})}
                >
                  Read Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;