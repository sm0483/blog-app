import test from '../../assets/icon.jpg'
import Credit from '../common/Creadit';
import Head from '../common/Head';
const Content = () => {
    return (
        <div className="container p-2 article-content mt-5">
            <div className="row">
                <div className="col-lg-6 col-sm-1 article-image-container">
                    <img src={test} className='img-fluid w-100' alt="article" />
                </div>
                <div className="col-lg-6 col-sm-1">
                <Head/>
                <Credit/>
                <p className='p-4'>
                    Lorem 
                    ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. 
                    Cum sociis natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Donec quam felis, ultricies nec,
                    pellentesque eu, pretium quis, sem. Nulla consequat massa 
                        quis enim. Donec pede justo, fringilla vel, aliquet nec, 
                    vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                    Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus
                    elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                    eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, 
                    feugiat a, tellus. Phasellus viverra nulla ut
                    metus varius laoreet. Quisque rutrum. Aenean imperdiet. 
                    Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. 
                    Nam eget dui. Etiam rhoncus. Maecenas tempus,
                    tellus eget condimentum rhoncus, sem quam semper libero,
                    sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                    hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut 
                    libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo.
                    Sed fringilla mauris sit amet 
                    nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales,
                    augue velit cursus nunc,
                    please end this crap Lorem ipsum dolor, 
                    sit amet consectetur adipisicing elit. 
                    Sed debitis maxime optio culpa aliquam nisi fu
                    git libero, repudiandae explicabo corporis non ex dolor.
                     Voluptas non numquam adipisci, 
                    illo fugit impedit.
                </p>
                </div>
            </div>
        </div>
    );
}
 
export default Content;