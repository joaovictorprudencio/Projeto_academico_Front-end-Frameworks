import CardComponent from '../components/Card';
import styles from '../styles/Home.module.css';
import produc from "../imgs/sanduiche.webp"
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Button from '@mui/material/Button';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer';

const productsList = [
    {
        name: "Big duplo",
        image: produc,
        restaurant: 'Burguer king'
    },
    {
        name: "Big duplo",
        image: produc,
        restaurant: 'Burguer king'
    },
    {
        name: "Big duplo",
        image: produc,
        restaurant: 'Burguer king'
    },
    {
        name: "Big duplo",
        image: produc,
        restaurant: 'Burguer king'
    },
    {
        name: "Big duplo",
        image: produc,
        restaurant: 'Burguer king'
    },
    {
        name: "Big duplo",
        image: produc,
        restaurant: 'Burguer king'
    },
    {
        name: "Big duplo",
        image: produc,
        restaurant: 'Burguer king'
    },
    {
        name: "Big duplo",
        image: produc,
        restaurant: 'Burguer king'
    }

]


const Home = () => {

     const navigate = useNavigate();

const redirectToRestaurant = () => {
    navigate('/restaurantes')
}

const redirectToPharmacy = () => {
    navigate('/farmacias')
}
const redirectToMarkets = () => {
    navigate('/mercados')
}

const redirectToCart = () => {
    navigate('/carrinho')
}


    return (
        <div className={styles.page}>
            <section className={styles.content}>
                <h2 className={styles.messegeTitle}>Pedir seu delivery no iFood é rápido e prático! Conheça as categorias</h2>
                <div className={styles.contentItens}>
                    <Button 
                    variant="contained" 
                    color="success"
                    onClick={redirectToRestaurant}
                    sx={{
                        paddingRight:9,
                        paddingLeft:9,
                        paddingTop:4,
                        paddingBottom:4,
                    }}
                    >
                        <RestaurantIcon
                        sx={{
                            marginRight:2,
                        }}
                        />
                        Restaurantes
                    </Button>
                      <Button 
                    variant="contained" 
                    sx={{
                        paddingRight:9,
                        paddingLeft:9,
                        paddingTop:4,
                        paddingBottom:4,
                        backgroundColor:'#2862baff'
                    }}
                    onClick={redirectToMarkets}
                    >
                        <AddBusinessIcon
                        sx={{
                            marginRight:2,
                        }}
                        />
                        Mercados
                    </Button>
                     <Button 
                    variant="contained" 
                    onClick={redirectToPharmacy}
                    sx={{
                        paddingRight:9,
                        paddingLeft:9,
                        paddingTop:4,
                        paddingBottom:4,
                        backgroundColor:'#21afb9ff'
                    }}
                    >
                        <AddBusinessIcon
                        sx={{
                            marginRight:2,
                        }}
                        />
                        Farmácias
                    </Button>
                </div>
            </section>
            <section className={styles.contentMessege}>
                 <Typography
                  sx={{
                     marginLeft: 0,
                     color: 'rgba(212, 36, 36, 1)',
                     fontFamily: '"Impact", "Haettenschweiler", "Arial Narrow Bold", sans-serif',
                     letterSpacing: 1
                     }} variant="h5" >
                          Promoções imperdiveis para hoje 🔥
                 </Typography>
            </section>
            <section className={styles.contentCard}>
                {
                    productsList.map((produc) => {
                        return (
                            <CardComponent
                                restaurant={produc.restaurant}
                                name={produc.name}
                                imageProduc={produc.image}
                            />
                        )
                    })
                }
            </section>
          <Footer/>
        </div>
    );
}

export default Home;