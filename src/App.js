import { Add, BusinessTwoTone, ExpandMore, FilterAlt, FilterList, Folder, Help,InsertLink,MenuOutlined, NotificationAdd, SearchOutlined, Star, StarOutline, TextSnippet} from '@mui/icons-material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import './App.css'
function App(){
return(<>
<header>
    <div className='headercon'>
        <div className='headerconleft'><span>
            
            <MenuOutlined></MenuOutlined></span>
            <span>
<SearchOutlined></SearchOutlined></span></div>
<div className='headerconright'>
    <span>
<Help></Help></span>
<span><NotificationAdd></NotificationAdd></span>
<span id="topspan">
<div id="top" className='Logocon'>
    <img src='https://yt3.ggpht.com/a/AATXAJwEpOimTtO67C3FMm6aNpzYZJ1cRYKBpHtGz5E=s900-c-k-c0xffffffff-no-rj-mo' alt="logo"/>
</div>
</span>
</div>

    </div>
    <div className='secondbox'><p>Shortcuts</p>
    <div>
    <ButtonGroup
  disableElevation
  variant="contained"
  aria-label="Disabled elevation buttons">

  <Button><Add></Add></Button>
  <Button><ExpandMore></ExpandMore></Button>
</ButtonGroup>

</div>
    </div>
    <div className='thirdbox' >
        <div className='thirdleft'>
    <Button variant="outlined">
    All    &nbsp; <ExpandMore></ExpandMore></Button></div>
    <div className='thirdin'>
        <div className='filtersort'>
            <span>
        <FilterAlt></FilterAlt></span>
        <span> <FilterList></FilterList></span>
        </div>
        {/* </span>
        <span> */}

        <div className='float'>
            <span>
            <InsertLink></InsertLink></span>
            <span><Folder></Folder></span>
            <span> <TextSnippet></TextSnippet></span>
        </div>
        </div>
    </div>

    <div className='mainbox'>

        <div className='thumbnailbox'>
         <img src="https://logos-download.com/wp-content/uploads/2019/11/Miro_Logo.png" alt="logos"/>
        </div>

         <div className='contentbox'>

            <h3>o/signup-flow</h3>
            <div className='innercon'>
                <span>
            <div className='Logocon'>
    <img src='https://cdn.dribbble.com/users/933550/screenshots/11159468/media/8470e5d1caa7096fe195e968be7d0c41.jpg' alt="logo"/>
</div></span>
<span className='common'>5min ago</span>

            {/* </div>
            <div> */}
          <span className='common'><BusinessTwoTone></BusinessTwoTone></span>
          <span className='common'>22 visits</span>

            </div>
        </div>

        <div className='endicon'><Star></Star></div>
    </div>

    <div className='mainbox'>

<div className='thumbnailbox'>
 <img src="https://sites.google.com/site/misteredtech2002/_/rsrc/1462116139832/google-calendar/google-calendar-logo.png" alt="logos"/>
</div>
<div className='contentbox'>

    <h3>o/content-calendar</h3>
    <div className='innercon'>
        <span>
    <div className='Logocon'>
<img src='https://i.pinimg.com/originals/f2/7b/37/f27b37cc769687d2a70312d402b8535f.png' alt="logo"/>
</div></span>
<span className='common'> Today </span>

    {/* </div>
    <div> */}
  <span className='common'><BusinessTwoTone></BusinessTwoTone></span>
  <span className='common'>22 visits</span>

    </div>
</div>
<div className='endicon'><StarOutline></StarOutline></div>
</div>
<div className='mainbox'>

<div className='thumbnailbox'>
 <img src="https://th.bing.com/th/id/OIP.g33EiPovJNKDDxKmhAuzVwHaFj?pid=ImgDet&rs=1" alt="logos"/>
</div>
<div className='contentbox'>

    <h3>o/card-designs</h3>
    <div className='innercon'>
        <span>
    <div className='Logocon'>
<img src='https://yt3.ggpht.com/a/AATXAJwEpOimTtO67C3FMm6aNpzYZJ1cRYKBpHtGz5E=s900-c-k-c0xffffffff-no-rj-mo' alt="logo"/>
</div></span>
<span className='common'>Yesterday</span>

    {/* <div> */}
  <span className='common'><BusinessTwoTone></BusinessTwoTone></span>
  <span className='common'>22 visits</span>
  {/* </div> */}
    </div>
</div>
<div className='endicon'><Star></Star></div>
</div>
<div className='mainbox'>

<div className='thumbnailbox'>
 <img src="https://cdn.w600.comps.canstockphoto.com/n-letter-cube-clip-art_csp15970723.jpg" alt="logos"/>
</div>
<div className='contentbox'>

    <h3>o/roadmap</h3>
    <div className='innercon'>
        <span>
    <div className='Logocon'>
<img src='https://yt3.ggpht.com/a/AATXAJwEpOimTtO67C3FMm6aNpzYZJ1cRYKBpHtGz5E=s900-c-k-c0xffffffff-no-rj-mo' alt="logo"/>
</div></span><span className='common'>16th - sep</span>
    {/* </div>
    <div> */}
  <span className='common'><BusinessTwoTone></BusinessTwoTone></span>
  <span className='common'>22 visits</span>

    </div>
</div>
<div className='endicon'><StarOutline></StarOutline></div>
</div>
<div className='mainbox'>

<div className='thumbnailbox'>
 <img src="https://th.bing.com/th/id/OIP.WEcVdrhgYQTLcW3ytEZ_dwHaHa?pid=ImgDet&rs=1" alt="logos"/>
</div>
<div className='contentbox'>

    <h3>o/all-hands</h3>
    <div className='innercon'>
        <span>
    <div className='Logocon'>
<img src='https://cdn.dribbble.com/users/933550/screenshots/11159468/media/8470e5d1caa7096fe195e968be7d0c41.jpg' alt="logo"/>
</div></span><span className='common'>16th - sept</span>
    {/* </div>
    <div> */}
  <span className='common'><BusinessTwoTone></BusinessTwoTone></span>
  <span className='common'>22 visits</span>

    </div>
</div>
<div className='endicon'><StarOutline></StarOutline></div>
</div>
<div className='mainbox'>

<div className='thumbnailbox'>
 <img src="https://cdn.w600.comps.canstockphoto.com/n-letter-cube-clip-art_csp15970723.jpg" alt="logos"/>
</div>
<div className='contentbox'>

    <h3>o/user-feedbacks</h3>
    <div className='innercon'>
        <span>
    <div className='Logocon'>
<img src='https://i.pinimg.com/originals/f2/7b/37/f27b37cc769687d2a70312d402b8535f.png' alt="logo"/>
</div></span><span className='common'>16th -sept</span>
    {/* </div>
    <div> */}
  <span className='common'><BusinessTwoTone></BusinessTwoTone></span>
  <span className='common'>22 visits</span>

    </div>
</div>
<div className='endicon'><StarOutline></StarOutline></div>
</div>

</header>

</>)
}
export default App



















