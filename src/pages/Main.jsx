import Form from '../components/Form'
import Items from '../components/Items'
import Title from '../components/Title'

const Main = () => {
  return (
    <div className='p-5' >
        <Title text="To-do list" />
        <div className="flex flex-col items-center min-h-screen">
            <Form/>
            <Items/>
        </div>
    </div>
  )
}

export default Main