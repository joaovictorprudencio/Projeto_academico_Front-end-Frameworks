import CardComponent from '../components/Card';
import styles from '../styles/Home.module.css';
import produc from "../imgs/sanduiche.webp"
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Button from '@mui/material/Button';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';

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
    return (
        <div className={styles.page}>
            <section className={styles.content}>
                <h2 className={styles.messegeTitle}>Pedir seu delivery no iFood é rápido e prático! Conheça as categorias</h2>
                <div className={styles.contentItens}>
                    <Button 
                    variant="contained" 
                    color="success"
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
              <Box
                component="footer"
                sx={{
                    backgroundColor: '#2E2E2E',
                    color: 'white',
                    py: 6,
                    mt: 8,
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            justifyContent: 'space-between',
                            alignItems: { xs: 'center', md: 'flex-start' },
                            gap: 4,
                        }}
                    >
                        <Box sx={{ maxWidth: 300 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#EA1D2C' }}>
                                iFood
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#B0B0B0' }}>
                                A melhor plataforma de delivery da América Latina. 
                                Conectamos você aos melhores restaurantes, mercados e farmácias.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Links Úteis
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Link href="#" color="inherit" underline="hover" sx={{ color: '#B0B0B0' }}>
                                    Sobre nós
                                </Link>
                                <Link href="#" color="inherit" underline="hover" sx={{ color: '#B0B0B0' }}>
                                    Trabalhe conosco
                                </Link>
                                <Link href="#" color="inherit" underline="hover" sx={{ color: '#B0B0B0' }}>
                                    Seja um parceiro
                                </Link>
                                <Link href="#" color="inherit" underline="hover" sx={{ color: '#B0B0B0' }}>
                                    Ajuda
                                </Link>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Contato
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#B0B0B0', mb: 2 }}>
                                📞 (11) 4004-0000
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#B0B0B0' }}>
                                ✉️ suporte@ifood.com.br
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                Siga-nos
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <IconButton 
                                    sx={{ 
                                        color: '#B0B0B0',
                                        '&:hover': { color: '#4267B2' }
                                    }}
                                >
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton 
                                    sx={{ 
                                        color: '#B0B0B0',
                                        '&:hover': { color: '#E1306C' }
                                    }}
                                >
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton 
                                    sx={{ 
                                        color: '#B0B0B0',
                                        '&:hover': { color: '#1DA1F2' }
                                    }}
                                >
                                    <TwitterIcon />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                    <Box 
                        sx={{ 
                            borderTop: '1px solid #444', 
                            mt: 4, 
                            pt: 3,
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="body2" sx={{ color: '#B0B0B0' }}>
                            © {new Date().getFullYear()} iFood. Todos os direitos reservados.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </div>
    );
}

export default Home;