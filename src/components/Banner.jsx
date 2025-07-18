import Button from "./Button";

export default function Banner(){
    function openNewTab(obj){
        window.open(obj.url)
    }



    return(
        <div>
            <h1>Welcome to JJCVIP.dev</h1>
            <Button name="Twitter" text="Twitter" functionParams={{url:"x.com/jjcvip"}} function={openNewTab}/>
        </div>
    );
}