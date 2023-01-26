import Spinner from 'react-bootstrap/Spinner'

function Loading(props){
 
    const {loading, children} = props
    
    const styles = {
        spinner: {
            position: "fixed",
            bottom: "100px",
            left: "50%"
        }
    }

    if(loading){
        return(
            <div> 
                <Spinner style={styles.spinner} animation="border" variant="danger" />
            </div>
        )
    
    }else{
        return(
        <>
            {children}
        </>
        )
    } 
    
}

export default Loading