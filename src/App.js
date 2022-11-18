import {clearSearch, findAddress, showClear, enterSearch} from './utils';



function App() {
  return (
    <div>
      <header>
        Jai ram ji ki
      </header>
      <main>
      <div className="content">
        <p>This demo uses sample data by default, but you can swap out the dummy key in the JavaScript code window with one of your own to use real data.</p>
        <div className="fieldWrap">
          <input type="text" name="search" className="searchInput" id="searchBox" placeholder="Enter Address" onChange={showClear} onKeyPress={enterSearch} />
          <button onClick={findAddress}>Search</button>
          <div className="clear" id="clearButton" onClick={clearSearch}>X</div>
        </div>
        
        <div className="fieldWrap">
          <div className="error" id="errorMessage"></div>
        </div>
        
        <div className="fieldWrap">
          <div id="result"></div>
        </div>  
        
        <div className="seperator" id="seperator"></div> 
        
        <div className="fieldWrap">
          <div className="outputArea" id="output"></div>
        </div>
        
      </div>
      </main>
    </div>
  );
}

export default App;
