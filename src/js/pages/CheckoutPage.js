import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from "axios";

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
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}
export default function CheckoutPage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [cep,setCep] = React.useState('');
    const [estado,setEstado] = React.useState('');
    const [city,setCity] = React.useState('');
    const [cpf,setCpf] = React.useState('');
    const [activeFields,setActiveFields] = React.useState(true);
    const [bairro,setBairro] = React.useState('')
    const [logradouro,setLogradouro] = React.useState('')
    const [numero,setNumero] = React.useState('')
    const [complemento,setComplemento] = React.useState('')
  

    const handleChangeTabs = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeName = (e) =>{
        setName(e.target.value)
    }
    const handleChangeCpf = (e) =>{
        setCpf(cpfMask(e.target.value))
    }
    const handleChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handleChangeCep = (e) =>{
        setCep(e.target.value)
    }
    const handleChangeEstado = (e) =>{
        setEstado(e.target.value)
    }
    const handleChangeCity = (e) =>{
        setCity(e.target.value)
    }
    const handleChangeBairro = (e) =>{
        setBairro(e.target.value)
    }
    const handleChangeLogradouro = (e) =>{
        setLogradouro(e.target.value)
    }
    const handleChangeNumero = (e) =>{
        setNumero(e.target.value)
    }
    const handleChangeComplemento = (e) =>{
        setComplemento(e.target.value)
    }
    const getEndereco = async () =>{
        if(cep.length===8){
            let response = await axios.get(
                `https://viacep.com.br/ws/${cep}/json/`
            )
            if(response.data.erro!==true){
                setActiveFields(false)
                setCep(response.data.cep)
                setCity(response.data.localidade)
                setEstado(response.data.uf)
                setBairro(response.data.bairro)
                setLogradouro(response.data.logradouro)
            }
            else{
                console.log(response.data)
            }
        }
        
    }
    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChangeTabs}
            aria-label="nav tabs example"
            >
            <LinkTab label="Informações de Envio" {...a11yProps(0)} />
            <LinkTab label="Metodo de Pagamento"{...a11yProps(1)} />
            {/* <LinkTab label="Pedido Concluido" {...a11yProps(2)} /> */}
            </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
            <div className="row">
                <div className="input-group  mb-3 col-sm-12 col-md-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Nome</span>
                    </div>
                    <input type="text" className="form-control" required  autoComplete="off" placeholder="Nome" onChange={handleChangeName} value={name}/>
                </div>
                <div className="input-group  mb-3 col-sm-12 col-md-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">CPF</span>
                    </div>
                    <input type="text" autoComplete="off"  className="form-control" placeholder="cpf" onChange={handleChangeCpf} value={cpf}/>
                </div>
                <div className="input-group  mb-3 col-sm-12 col-md-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">email</span>
                    </div>
                    <input type="email"  pattern=".+@globex.com"  autoComplete="off"  className="form-control" placeholder="email" onChange={handleChangeEmail} value={email}/>
                </div>
                <div className="input-group  mb-3 col-sm-12 col-md-6 col-lg-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">CEP</span>
                    </div>
                    <input value={cep} required pattern= "\d{5}-?\d{3}"  autoComplete="off"  className="form-control" placeholder="Somente numeros" onChange={handleChangeCep} onBlur={getEndereco} />
                </div>
                <div className="input-group  mb-3 col-sm-12 col-md-6 col-lg-2">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Estado</span>
                    </div>
                    <input type ='text' required  autoComplete="off"  className="form-control" disabled={activeFields} value={estado} onChange={handleChangeEstado}/>
                </div>
                <div className="input-group  mb-3 col-sm-12 col-md-6 col-lg-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Cidade</span>
                    </div>
                    <input type ='text' required  autoComplete="off"  className="form-control" disabled={activeFields} value={city} onChange={handleChangeCity}/>
                </div>
                <div className="input-group  mb-3 col-sm-12 col-md-6 col-lg-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Bairro</span>
                    </div>
                    <input type ='text' required  autoComplete="off"  className="form-control" disabled={activeFields} value={bairro} onChange={handleChangeBairro}/>
                </div>
                <div className="input-group  mb-3 col-sm-12 col-md-6">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Logradouro</span>
                    </div>
                    <input type ='text' required  autoComplete="off" className="form-control" disabled={activeFields} value={logradouro} onChange={handleChangeLogradouro}/>
                </div>
                <div className="input-group  mb-3 col-sm-6 col-md-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Numero</span>
                    </div>
                    <input type ='text' required  autoComplete="off" className="form-control" disabled={activeFields} value={numero} onChange={handleChangeNumero}/>
                </div>
                <div className="input-group  mb-3 col-sm-6 col-md-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Complemento</span>
                    </div>
                    <input type ='text' autoComplete="off" className="form-control" disabled={activeFields} value={complemento} onChange={handleChangeComplemento}/>
                </div>
            </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
            Page Two
        </TabPanel>
        {/* <TabPanel value={value} index={2}>
            Page Three
        </TabPanel> */}
        </div>
    );
}