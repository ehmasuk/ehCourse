
import Base from '../pages/Base'

function Notfound({header}) {


    if(header){
        return (
            <Base>
        <div className="text-center p-5 m-0 bg-warning">
            <h1>404 PAGE NOT FOUND</h1>
        </div>
    </Base>
        )
    }else{
        return (
            <div className="text-center p-5 m-0 bg-warning">
            <h1>404 PAGE NOT FOUND</h1>
        </div>
        )
    }


}

export default Notfound