export const Switch = () => {

    const afterClick = () => {
        const body = document.querySelector('body');
        const input = document.getElementById('switch');
        const isChecked = input.checked;

        if (isChecked) {
            body.classList.remove('night');
        } else {
            body.classList.add('night');
        }
    }
    return (

        <div className="switch-wrapper">
            <div className="sun"></div>
            <div className="toggle-wrapper">
                <input id="switch" type="checkbox"/>
                <label htmlFor="switch" id="toggle" onClick={afterClick}>Toggle</label>
            </div>
            <div className="moon"></div>
        </div>

    )
}
