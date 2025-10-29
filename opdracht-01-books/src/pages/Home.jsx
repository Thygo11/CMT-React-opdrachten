import Header from "../components/header";
import Layout from "../components/Layout";
import BookList from "../components/BookList";

const Home = () => {
    return ( 
    <>
    <Header/>
    <Layout>
    <h1>Opdracht 1 - Books</h1>
    <BookList/>
    </Layout>
    </>
     );
}
 
export default Home;