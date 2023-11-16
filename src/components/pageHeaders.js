export default function PageHeaders({

    h1Text = 'Add epic captions to your videos',
    h2Text = 'Just upload your video and we will do the rest',


}) {

    return (

        <section className="text-center mt-24 mb-8">

            <h1 className="text-3xl mb-1">{h1Text}</h1>

            <h2 className="text-white/80">{h2Text}</h2>

        </section>


    );

}