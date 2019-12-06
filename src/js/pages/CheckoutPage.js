import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from "axios";
import { ufToStateName , getCardFlag } from '../functions'
import VisaIcon from '../../img/visa.svg'
import AmexIcon from '../../img/amex.svg'
import CreditCardIcon from '../../img/credit-card.svg'
import DinersIcon from '../../img/diners.svg'
import DiscoverIcon from '../../img/discover.svg'
import JCBIcon from '../../img/jcb.svg'
import MastercardIcon from '../../img/mastercard.svg'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux'
import { clearCart } from '../actions/index'



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
        >
        {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
        component="a"
        onClick={event => {
            event.preventDefault();
        }}
        {...props}
        style={{backgroundColor:'#1976d2'}}
        />
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));
const cpfMask = value => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2') 
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') 
}

function CheckoutPage(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [cep,setCep] = React.useState('');
    const [estado,setEstado] = React.useState('');
    const [city,setCity] = React.useState('');
    const [cpf,setCpf] = React.useState('');
    const [bairro,setBairro] = React.useState('')
    const [logradouro,setLogradouro] = React.useState('')
    const [numero,setNumero] = React.useState('')
    const [complemento,setComplemento] = React.useState('')
    const [cardNumber,setCardNumber] = React.useState('')
    const [bandeira,setBandeira] = React.useState('')
    const [cardName,setCardName] = React.useState('')
    const [cardCVV,setCardCVV] = React.useState('')
    const [cardMes,setCardMes] = React.useState('')
    const [cardAno,setCardAno] = React.useState('')
  
    const cardMask = value =>{
        setBandeira(getCardFlag(value))
        return value
        .replace(/\D/g, '')
          .replace(/(\d{4})(\d)/, '$1 $2')
          .replace(/(\d{4})(\d)/, '$1 $2')
          .replace(/(\d{4})(\d)/, '$1 $2') 
          .replace(/(.\d{4})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
    }
    const handleChangeTabs = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeName = (e) =>{
        setName(e.target.value.replace(/[0-9]/g,''))
    }
    const handleChangeCpf = (e) =>{
        setCpf(cpfMask(e.target.value))
    }
    const handleChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handleChangeCep = (e) =>{
        setCep(e.target.value.replace(/(\d{8})\d+?$/, '$1'))
    }
    const handleChangeEstado = (e) =>{
        setEstado(e.target.value.replace(/[0-9]/g,''))
    }
    const handleChangeCity = (e) =>{
        setCity(e.target.value.replace(/[0-9]/g,''))
    }
    const handleChangeBairro = (e) =>{
        setBairro(e.target.value.replace(/[0-9]/g,''))
    }
    const handleChangeLogradouro = (e) =>{
        setLogradouro(e.target.value.replace(/[0-9]/g,''))
    }
    const handleChangeNumero = (e) =>{
        setNumero(e.target.value.replace(/\D/g, ''))
    }
    const handleChangeComplemento = (e) =>{
        setComplemento(e.target.value.replace(/\D/g, ''))
    }
    const handleChangeCardNumber = (e) =>{
        setCardNumber(cardMask(e.target.value))
    }
    const handleChangeCardName = (e) =>{
        setCardName(e.target.value.replace(/[0-9]/g,''))
    }
    const handleChangeCardCVV = (e) =>{
        setCardCVV(e.target.value.replace(/\D/g, ''))
    }
    const handleChangeCardMes = (e) =>{
        setCardMes(e.target.value)
    }
    const handleChangeCardAno = (e) =>{
        setCardAno(e.target.value)
    }
    const handleConfirmBuy =() =>{
        if(name !== '' && email !== '' && cep !== '' && estado !== '' && city !== ''
          && cpf !== '' && bairro !== '' && logradouro !== '' && numero !== ''
          && cardNumber !== '' && cardName !== '' && cardCVV !== ''
          && cardMes !== '' && cardAno !== ''
        ){
            props.history.push(`/`);
            props.clearCart()
            alert('Compra realizada com sucesso')
        }
        else{
            alert('Por favor preencha todos os campos')
        }
    }
    const getCardIcon = () =>{
        var cards = {
            visa      : VisaIcon,
            mastercard : MastercardIcon,
            diners    : DinersIcon,
            amex      : AmexIcon,
            discover  : DiscoverIcon,
            jcb        : JCBIcon         
        }
        if(typeof cards[bandeira]!='undefined')
            return cards[bandeira]
        else
            return CreditCardIcon
    }
    const getEndereco = async () =>{
        if(cep.length===8){
            let response = await axios.get(
                `https://viacep.com.br/ws/${cep}/json/`
            )
            if(response.data.erro!==true){
                setCep(response.data.cep)
                setCity(response.data.localidade)
                setEstado(ufToStateName(response.data.uf))
                setBairro(response.data.bairro)
                setLogradouro(response.data.logradouro)
            }
        }
        
    }
    return (
        <div className="CheckoutPage">
            <AppBar position="static">
                <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChangeTabs}
                aria-label="nav tabs example"
                >
                <LinkTab label="Informações de Envio" {...a11yProps(0)} />
                <LinkTab label="Metodo de Pagamento"{...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className="container">
                    <div className="row">
                        <div className="input-group  mb-3 col-sm-12 col-md-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Nome</span>
                            </div>
                            <input type="text" className="form-control" required  autoComplete="off" placeholder="Nome" onChange={handleChangeName} value={name} maxLength="64"/>
                        </div>
                        <div className="input-group  mb-3 col-sm-12 col-md-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">CPF</span>
                            </div>
                            <input type="text" autoComplete="off"  className="form-control" placeholder="Somente Numeros" onChange={handleChangeCpf} value={cpf}/>
                        </div>
                        <div className="input-group  mb-3 col-sm-12 col-md-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                            </div>
                            <input type="email"  pattern=".+@globex.com"  autoComplete="off"  className="form-control" placeholder="Email" onChange={handleChangeEmail} value={email} maxLength="50"/>
                        </div>
                        <div className="input-group  mb-3 col-sm-12 col-md-6 col-lg-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">CEP</span>
                            </div>
                            <input value={cep} required pattern= "\d{5}-?\d{3}"  autoComplete="off"  className="form-control" placeholder="Somente numeros" onChange={handleChangeCep} onBlur={getEndereco} />
                        </div>
                        <div className="input-group  mb-3 col-sm-12 col-md-6 col-lg-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Estado</span>
                            </div>
                            <input type ='text' required  autoComplete="off"  className="form-control" value={estado} placeholder="Estado" onChange={handleChangeEstado} maxLength="30"/>
                        </div>
                        <div className="input-group  mb-3 col-sm-12 col-md-6 col-lg-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Cidade</span>
                            </div>
                            <input type ='text' required  autoComplete="off"  className="form-control" value={city} placeholder="Cidade" onChange={handleChangeCity} maxLength="35"/>
                        </div>
                        <div className="input-group  mb-3 col-sm-12 col-md-6 col-lg-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Bairro</span>
                            </div>
                            <input type ='text' required  autoComplete="off"  className="form-control" value={bairro} placeholder="Bairro" onChange={handleChangeBairro} maxLength="35"/>
                        </div>
                        <div className="input-group  mb-3 col-sm-12 col-md-6">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Logradouro</span>
                            </div>
                            <input type ='text' required  autoComplete="off" className="form-control" value={logradouro} placeholder="Logradouro" onChange={handleChangeLogradouro} maxLength="95"/>
                        </div>
                        <div className="input-group  mb-3 col-sm-6 col-md-6 col-lg-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Numero</span>
                            </div>
                            <input type ='text' required  autoComplete="off" className="form-control" value={numero} placeholder="Numero" onChange={handleChangeNumero} maxLength="6"/>
                        </div>
                        <div className="input-group  mb-3 col-sm-6 col-md-6 col-lg-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Complemento</span>
                            </div>
                            <input type ='text' autoComplete="off" className="form-control" value={complemento} placeholder="Complemento" onChange={handleChangeComplemento} maxLength="5"/>
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className="container">
                    <div className="row">
                        <div className="input-group  mb-3 col-sm-12">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Numero do cartão</span>
                            </div>
                            <input type="text" className="form-control" required  autoComplete="off" placeholder="Numero no Cartão" onChange={handleChangeCardNumber} value={cardNumber}/>
                            <img src={getCardIcon()} alt ={bandeira} style={{marginLeft:'5px', height:'56px'}}></img>
                            {/* visa 45xxxxxx master 52xxxxxx */}
                        </div>
                        <div className="input-group  mb-3 col-sm-12">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Nome no Cartão</span>
                            </div>
                            <input type="text" className="form-control" required  autoComplete="off" placeholder="Nome no Cartão" onChange={handleChangeCardName} value={cardName} maxLength="64"/>
                        </div>
                        <div className="input-group  mb-3 col-md-8 col-sm-12 validade">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Validade</span>
                            </div>
                            <FormControl variant="outlined" className={classes.formControl} style={{width: "30%"}}>
                                <InputLabel id="demo-simple-select-filled-label">Mês</InputLabel>
                                <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={cardMes}
                                onChange={handleChangeCardMes.bind(this)}
                                >
                                <MenuItem value={1}>Janeiro</MenuItem>
                                <MenuItem value={2}>Fevereiro</MenuItem>
                                <MenuItem value={3}>Março</MenuItem>
                                <MenuItem value={4}>Abril</MenuItem>
                                <MenuItem value={5}>Maio</MenuItem>
                                <MenuItem value={6}>Junho</MenuItem>
                                <MenuItem value={7}>Julho</MenuItem>
                                <MenuItem value={8}>Agosto</MenuItem>
                                <MenuItem value={9}>Setembro</MenuItem>
                                <MenuItem value={10}>Outubro</MenuItem>
                                <MenuItem value={11}>Novembro</MenuItem>
                                <MenuItem value={12}>Dezembro</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.formControl} style={{width: "30%"}}>
                                <InputLabel id="demo-simple-select-filled-label">Ano</InputLabel>
                                <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={cardAno}
                                onChange={handleChangeCardAno.bind(this)}
                                >
                                <MenuItem value={2019}>2019</MenuItem>
                                <MenuItem value={2020}>2020</MenuItem>
                                <MenuItem value={2021}>2021</MenuItem>
                                <MenuItem value={2022}>2022</MenuItem>
                                <MenuItem value={2023}>2023</MenuItem>
                                <MenuItem value={2024}>2024</MenuItem>
                                <MenuItem value={2025}>2025</MenuItem>
                                <MenuItem value={2026}>2026</MenuItem>
                                <MenuItem value={2027}>2027</MenuItem>
                                <MenuItem value={2028}>2028</MenuItem>
                                <MenuItem value={2029}>2029</MenuItem>
                                <MenuItem value={2029}>2030</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="input-group  mb-3 col-md-4 col-sm-12">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">CVV</span>
                            </div>
                            <input type="text" className="form-control" required  autoComplete="off" placeholder="CVV" onChange={handleChangeCardCVV} value={cardCVV} maxLength="3"/>
                        </div>
                    </div>
                    <div className="containerPrice-Button">
                        <button onClick={handleConfirmBuy} className="buttonConfirm">Confirmar Compra</button>
                        <h3>R$ {props.total},00</h3>
                    </div>
                </div>
            </TabPanel>
        </div>
    );
}

const mapStateToProps = state => ({
    total: state.totalPrice
});
const mapDispatchToProps = (dispatch) =>({
    clearCart: () => dispatch(clearCart())
});
export default connect(mapStateToProps,mapDispatchToProps)(CheckoutPage);
