// UTILS JSON
import MoviesList from "../../../utils/assets/json/movies.json";
// COMMONS
import { Row } from "../../../components/common";

export default function HomeNetflix() {
  return MoviesList.map((item, index) => {
    return <Row key={index} category={item.category} images={item.images} />;
  });
}
