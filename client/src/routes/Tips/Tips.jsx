import React from 'react'
import Info from '../../Components/Info/Info'
import tips from './Tips.module.css'

const Tips = () => {
    return (
        <div className='body_container' style={{ paddingTop: '0px' }}>
            <Info message={'Helpful Tips'}/>

            <div className={tips.container}>
                <span><h2>Data Entry:</h2></span>
                <br/>
                <span><h4>Search</h4></span>
                <span>
                    <div>To get started, select a borough, then enter the property's house number, followed by the street name.</div>
                    <br/>
                    <div>
                        If you wanted to search for property data of the Empire State Building, enter the following data into the form: 
                        <br/><br/>
                        - Borough: Manhattan
                        <br/>
                        - House Number: 20
                        <br/>
                        - Street Name: West 34 Street
                    </div>
                    <br/>
                </span>

                <span><h4>Data Persistence</h4></span>
                <span>
                    After successfully searching a property, the data returned from the search will persist unless you manually reload the page. Clicking on any of the navigation buttons will display the data related to that category.
                </span>
                <br/>

                <span><h2>Abbreviations:</h2></span>
                <br/>
                <span>
                    <h4>Directional Names</h4>
                    <div>North, South, East, West can be abbreviated like N, S, E & W as long as they are prefixed to a street name or appended to the end of a street name.</div>
                    <br/>
                    <span style={{ fontStyle: 'italic' }}>Examples:</span>
                    <ul>
                        <li>Central Park South: Central Park S</li>
                        <li>North Conduit Avenue: N Conduit Ave</li>
                    </ul>
                </span>
                <br/>

                <span><h4>Road Names</h4></span>
                <div>
                    Street (St), Avenue (Av/Ave), Boulevard (Blvd), Center (Ctr), Circle (Cir), Court(Ct), Crescent (Cres), Drive (Dr), Highway (Hwy), Lane (Ln), Mount (Mt), Park (Pk), Parkway (Pwy/Pkwy), Place (Pl), Plaza (Pz/Plz),
                    Road (Rd), Square (Sq), Terrace (Terr), Way (Wy)<br/><br/>
                </div>

                <span><h4>Exceptions</h4></span>
                <div>South St (Lower Manhattan) and West St (Battery Pk) in Manhattan should be entered normally.</div>
                <div>Names of Saints can be abbreviated to St (St Nicholas Ave, St Marks Pl).</div>
                <div>Avenue of the Americas is 6 Avenue, searching either street name will return the same result.</div>
                <div>Avenues A, B, C, D can be entered in three ways: Avenue A, Ave A, or Av A</div>
                <div>The Broadways in Manhattan (Broadway, E Broadway, and W Broadway) are all individual streets, none of which connect.</div>
                <br/>

                <span><h4>Special Street Names Surrounding Parks</h4></span>
                <div>Central Park: Shorthand abbreviations for North, South, East and West streets are valid entries (Central Park South can be entered as CPS).</div>
                <div>Washington Square Park: The North, South, East and West streets along Washington Square can be entered as Washington Square/Sq N/S/E/W. Similar rules apply to Union Square; Prospect, Gramercy Parks.</div>
            </div>
        </div>
    )
}

export default Tips