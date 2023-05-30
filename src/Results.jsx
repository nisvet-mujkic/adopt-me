import Pet from "./Pet";
import Pagination from "./components/Pagination";

const Results = ({ pets, count, paginate, currentPage }) => {
  return (
    <div>
      {pets.length ? (
        <Pagination
          count={count}
          paginate={paginate}
          currentPage={currentPage}
        />
      ) : null}
      <div className="search">
        {!pets.length ? (
          <h1>No pets found</h1>
        ) : (
          pets.map((pet) => (
            <Pet
              key={pet.id}
              id={pet.id}
              name={pet.name}
              animal={pet.animal}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              breed={pet.breed}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Results;
