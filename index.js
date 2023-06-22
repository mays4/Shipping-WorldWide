

function App() {
  const [text,setText] = React.useState("");
  const handleChange=(e)=>{
    setText(e.target.value)
  }
  const dummyData = [
    {
      id: 0,
      productName: "product Name",
      price: "US $40",
      sale: "US $26",
      image: "./assets/plant.jpg",
    },
    {
      id: 1,
      productName: "product Name",
      price: "US $40",
      sale: "US $26",
      image: "./assets/plant.jpg",
    },
    {
      id: 2,
      productName: "product Name",
      price: "US $40",
      sale: "US $26",
      image: "./assets/plant.jpg",
    },
    {
      id: 3,
      productName: "product Name",
      price: "US $40",
      sale: "US $26",
      image: "./assets/plant.jpg",
    },
    {
      id: 4,
      productName: "product Name",
      price: "US $40",
      sale: "US $26",
      image: "./assets/plant.jpg",
    },
    {
      id: 5,
      productName: "product Name",
      price: "US $40",
      sale: "US $26",
      image: "./assets/plant.jpg",
    },
    {
      id: 6,
      productName: "product Name",
      price: "US $40",
      sale: "US $26",
      image: "./assets/plant.jpg",
    },
    {
      id: 7,
      productName: "product Name",
      price: "US $40",
      sale: "US $26",
      image: "./assets/plant.jpg",
    },
  ];

  return (
    <div className="app">
      <nav >
        <p className="title">
          {" "}
          Free Shipping WorldWide!! 
          <i className="fa fa-smile" aria-hidden="true"></i>
        </p>
      </nav>
      <div className="inside">
        {/* <div>
        </div> */}
        <div>
          <button className="logo">
            <h1>Plants World</h1>
          </button>
        </div>
        <div className="search">
          <div className="inside-input">
            <div className="input-icons">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input className="input-field" type="text" placeholder="enter for search "  value={text} onChange={handleChange}/>
            </div>
            <div>
              {" "}
              <i className="fa badge fa-lg" value="3">
                &#xf07a;
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="products" ><h2>Products</h2></div>
      
       
      <main >
        <div className="side-bar">
          <div className="filter" >
          <select className="sort">
                    <option value="0">Sort By </option>
                    <option value="1"> Color</option>
                    <option value="2">Season</option>
                  </select>
            <button className="filter-button">Filter by</button>
            
          </div>
          <div className="button-color-option">
          <div>
            <button className="color-button">Color</button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "68px",
            }}
          >
       
            <div style={{ display: "flex" }}>
              <input type="radio" value="Blue" name="blue" className="Blue" /> {" "}
              <label for="blue">Blue</label>
            </div>

            <div style={{ display: "flex" }}>
              <input type="radio" value="White" name="White" /> {" "}
              <label for="White">White</label>
            </div>
            <div style={{ display: "flex" }}>
              <input type="radio" value="Tometo" name="Tometo" /> {" "}
              <label for="Tometo" className="tometo">
                Tometo
              </label>
            </div>
            <div style={{ display: "flex" }}>
              <input type="radio" name="Grey" value="Grey" /> {" "}
              <label for="Grey" className="Grey">
                Grey
              </label>
            </div>
            </div>
       
          <div>
            <button className="color-button">Season</button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "68px",
            }}
          >
            <span>
              <input type="radio" value="Spring" /> {" "}
              <label for="Spring" className="Spring">
                Spring
              </label>
            </span>
            <span>
              <input type="radio" name="Summer" value="Summer" /> {" "}
              <label for="Summer" className="Summer">
                Summer
              </label>
            </span>
          </div>
          </div>
        </div>

        <div className="card">
       
          {dummyData.map((item) => (
            <>
            
              <div className="inside-card">
                <div className="inside-inside-card">
                  {item.id === 1 && (
                    <div className="cir">
                      <p>SALE</p>
                    </div>
                  )}

                  <img src={item.image} alt="product" />
                </div>
<div>
                <div className="product">
                  <p>{item.productName}</p>
                </div>
                <div className="price">
                  <p className="Overline">{item.price}</p> <p>{item.sale}</p>
                </div>
                <div className="select-outside">
                  <select className="select-inside">
                    <option value="0">Select </option>
                    <option value="1"> option1</option>
                    <option value="2">option2</option>
                  </select>
                </div>
                <div className="button-card">
                  <button className="inside-button">
                    Add to cart <i className="fa  fa-lg">&#xf07a;</i>
                  </button>
                </div>
                </div>
              </div>
            </>
          ))}
        </div>
       
      </main>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
