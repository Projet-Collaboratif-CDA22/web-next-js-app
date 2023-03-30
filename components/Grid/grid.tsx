import Image from "next/image";

function Grid() {
    return (
        <div className="col-lg-12 col-md-12">
            <a href='#' >
                {/* Pour l'instant, on peux changer la couleur entre : blue, pink, pruple, red, green, orange */}
                <div className="service-box blue">
                    <div className="d-flex row">
                        <div className="col-lg-3">
                            <Image className="grid__img" src="/tutorat.png" alt="Image" width={100} height={100} />
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-10">
                                    <h3 className="grid__title">Cours de Piano</h3>
                                </div>
                                <div className="col-lg-2">
                                    <small className="grid__date text-black">30/03/2023</small>
                                </div>
                            </div>
                            <span className="grid__description text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laborum, temporibus molestias maiores harum ad hic voluptatum magni cum, doloribus voluptates culpa sit dolore corrupti numquam adipisci, dicta nam aliquam!</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Grid;