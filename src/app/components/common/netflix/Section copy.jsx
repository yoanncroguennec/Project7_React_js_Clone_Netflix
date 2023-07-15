
export default function Section ({ category, images }) {
  // récupération des props passées depuis App.js au composant Section
  return (
    <div className='container'>
      <p className='title'>{category}</p>
      <div className='movies-list'>
        {/* .map() sur le tableau images présent dans chaque élément du JSON  */}
        {images.map((img, index) => {
          return <img key={index} alt='movie' src={img} />;
        })}
      </div>
    </div>
  );
};
