import "./Register.css";
import CardRegister from "../../components/CardRegister";
    
const choice = [
    {
      name: 'Sim',
    },
    {
      name: 'Não'
    }
]

const sex = [
    {
      name: 'Fêmea',
    },
    {
      name: 'Macho'
    }
]

const size = [
    {
      name: 'Mini',
    },
    {
      name: 'Pequeno'
    },
    {
      name: 'Médio'
    },
    {
      name: 'Grande '
    }
]

const Register = () => {
    return <section className="register-screen">
        <div className="register">
            <CardRegister
            nameChoice={choice.map(choice => choice.name)} 
            nameSex={sex.map(sex => sex.name)} 
            nameSize={size.map(size => size.name)} 
            />
        </div>
    </section>
}

export default Register;
 
 