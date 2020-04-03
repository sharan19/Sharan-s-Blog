
var documents = [{
    "id": 0,
    "url": "https://sharan19.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://sharan19.github.io/about/",
    "title": "About Me",
    "body": "Few things about me:  Completed under graduate in mechanical engineering in 2013.  Working in my current organisation from 2018 as sales engineer.  Completed PGP in machine learning from Great Learning.  Introducing sales forecasting to my organisation.  Majorly worked in client facing roles. You can reach me through twitter or linkedin links given below. "
    }, {
    "id": 2,
    "url": "https://sharan19.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 3,
    "url": "https://sharan19.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 4,
    "url": "https://sharan19.github.io/fastpages/cnc/sales/haas/forecasting/vmc/colab/2020/04/02/_03_26_Sharan_Sales_Performance.html",
    "title": "My Sales Performance",
    "body": "2020/04/02 -                 # Liberaries which we are going to use are mentioned. Any additional libraries will be added as and when required# Pandas library is for basic operations like print, write , read , merge etc. , so i add them in all notebooks# Numpy library is for mathematical operations# Matplotlib is for creating plots, graphs and visual representation to better understand our findingsimport pandas as pdimport numpy as npimport matplotlib. pyplot as plt% matplotlib inline# The last line is to ensure the plots open in same window instead of seperate window          # We are creating a dataframe, which will hold the data. In this case the data is in an excel sheet. #for an earlier version of Excel, you may need to use the file extension of &#39;xls&#39;# We can give any name for the the data frame we created but I am giving the name df for shortform of dataframe# (i know it&#39;s obvious but nevermind ). header =1 to mention that the first row is column namedf = pd. read_excel (r&#39;C:\Users\sharan\Desktop\office\Sharan Performance. xlsx&#39;, header=1) #df=df. to_string(index=False)print (df)            Customer Machine   Month Year     Sector \0     Limat Engineering  VF-4 February 2019    toolroom  1       DMV Industries  VF-4    May 2019 die and mould  2          Sosher   VF-2   July 2019    toolroom  3          Sosher  ST 20Y   July 2019    toolroom  4          Texcel Q  VF-2  August 2019   production  5        Rapid ProMac  VF-4 December 2019   production  6 Royal Casting Engineering  VF-4  January 2020 die and mould  7        Rapid ProMac  VF-2 February 2020   production      Region Previous machine Stock machine 0   Chennai         0      No 1   Chennai         0      No 2 Kanchipuram         0      No 3 Kanchipuram         0      No 4 Kanchipuram         7      Yes 5   Chennai         2      Yes 6 Thiruvallur         0      No 7   Chennai         3      Yes   The above list contains list of customers who purchased haas machines from Me, Sharan Kumar. The columns are: Customer: Customer name Machine : Machine purchased from me Month  : Month of purchase Year  : Year of purchase Sector : Sector in which customer works in Region : District in which the company is located Previous machine: Previous machine in same catagory the customer has. For example, if he is purchasing VMC then the table will have number of VMCs. Stock machine : Whether the machine already exisitng in our stock or they had to be imported.       df. dtypes  Customer      objectMachine       objectMonth        objectYear         int64Sector       objectRegion       objectPrevious machine   int64Stock machine    objectdtype: object        df[[&#39;Customer&#39;,&#39;Machine&#39;,&#39;Month&#39;,&#39;Sector&#39;,&#39;Region&#39;,&#39;Stock machine&#39;]]= df[[&#39;Customer&#39;,&#39;Machine&#39;,&#39;Month&#39;,&#39;Sector&#39;,&#39;Region&#39;,&#39;Stock machine&#39;]]. astype(str)          #convert_dict={&#39;Customer&#39;:str,&#39;Machine&#39;:str,&#39;Month&#39;:str,&#39;sector&#39;:str, &#39;region&#39;:str,&#39;Stock machine&#39;:str}          #df = df. astype(convert_dict) df. dtypes  Customer      objectMachine       objectMonth        objectYear         int64Sector       objectRegion       objectPrevious machine   int64Stock machine    objectdtype: object        print(&quot; Number of machines sold in 2018:&quot;,df[&#39;Machine&#39;]. where(df. Year==2018). count())   Number of machines sold in 2018: 0        print(&quot;Number of machines sold in 2019:&quot;,df[&#39;Machine&#39;]. where(df. Year==2019). count())print(&quot;\nDifferent machines sold in 2019:&quot;)df[&#39;Machine&#39;]. where(df. Year==2019). value_counts()  Number of machines sold in 2019: 6Different machines sold in 2019:VF-4   3VF-2   2ST 20Y  1Name: Machine, dtype: int64        print(&quot;Number of machines sold in 2020:&quot;,df[&#39;Machine&#39;]. where(df. Year==2020). count(),&quot;*&quot;)print(&quot;\nDifferent machines sold in 2020:\n&quot;)print(df[&#39;Machine&#39;]. where(df. Year==2020). value_counts())print(&quot;\n* Made till end of February&quot;)  Number of machines sold in 2020: 2 *Different machines sold in 2020:VF-4  1VF-2  1Name: Machine, dtype: int64* Made till end of february        print(&quot; Total number of machines sold:&quot;,df[&#39;Machine&#39;]. count())   Total number of machines sold: 8        print(&quot;Different machines sold:&quot;)df. groupby(&#39;Year&#39;)[&#39;Machine&#39;]. value_counts()  Different machines sold:Year Machine2019 VF-4    3   VF-2    2   ST 20Y   12020 VF-2    1   VF-4    1Name: Machine, dtype: int64  I have been part of manav marketing since 2018 september that means I have been in company for 4 months in 2018. I have sold 6 machines in 2019 and 2 machine in 2020. The most sold machine is VF-4. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}