
var documents = [{
    "id": 0,
    "url": "https://sharan19.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://sharan19.github.io/about/",
    "title": "About Me",
    "body": "This is where you put the contents of your About page. Like all your pages, it’s in Markdown format. This website is powered by fastpages 1.       a blogging platform that natively supports Jupyter notebooks in addition to other formats.  &#8617;    "
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
    "url": "https://sharan19.github.io/2020/03/14/Sharan-Sales-Performance.html",
    "title": "Title",
    "body": "2020/03/14 -                 # Liberaries which we are going to use are mentioned. Any additional libraries will be added as and when required# Pandas library is for basic operations like print, write , read , merge etc. , so i add them in all notebooks# Numpy library is for mathematical operations# Matplotlib is for creating plots, graphs and visual representation to better understand our findingsimport pandas as pdimport numpy as npimport matplotlib. pyplot as plt% matplotlib inline# The last line is to ensure the plots open in same window instead of seperate window          # We are creating a dataframe, which will hold the data. In this case the data is in an excel sheet. #for an earlier version of Excel, you may need to use the file extension of &#39;xls&#39;# We can give any name for the the data frame we created but I am giving the name df for shortform of dataframe# (i know it&#39;s obvious but nevermind ). header =1 to mention that the first row is column namedf = pd. read_excel (r&#39;C:\Users\sharan\Desktop\office\Sharan Performance. xlsx&#39;, header=1) #df=df. to_string(index=False)print (df)            Customer Machine   Month Year     Sector \0     Limat Engineering  VF-4 February 2019    toolroom  1       DMV Industries  VF-4    May 2019 die and mould  2          Sosher   VF-2   July 2019    toolroom  3          Sosher  ST 20Y   July 2019    toolroom  4          Texcel Q  VF-2  August 2019   production  5        Rapid ProMac  VF-4 December 2019   production  6 Royal Casting Engineering  VF-4  January 2020 die and mould  7        Rapid ProMac  VF-2 February 2020   production      Region Previous machine Stock machine 0   Chennai         0      No 1   Chennai         0      No 2 Kanchipuram         0      No 3 Kanchipuram         0      No 4 Kanchipuram         7      Yes 5   Chennai         2      Yes 6 Thiruvallur         0      No 7   Chennai         3      Yes   The above list contains list of customers who purchased haas machines from Me, Sharan Kumar. The columns are: Customer: Customer name Machine : Machine purchased from me Month  : Month of purchase Year  : Year of purchase Sector : Sector in which customer works in Region : District in which the company is located Previous machine: Previous machine in same catagory the customer has. For example, if he is purchasing VMC then the table will have number of VMCs. Stock machine : Whether the machine already exisitng in our stock or they had to be imported.       df. dtypes  Customer      objectMachine       objectMonth        objectYear         int64Sector       objectRegion       objectPrevious machine   int64Stock machine    objectdtype: object        df[[&#39;Customer&#39;,&#39;Machine&#39;,&#39;Month&#39;,&#39;Sector&#39;,&#39;Region&#39;,&#39;Stock machine&#39;]]= df[[&#39;Customer&#39;,&#39;Machine&#39;,&#39;Month&#39;,&#39;Sector&#39;,&#39;Region&#39;,&#39;Stock machine&#39;]]. astype(str)          #convert_dict={&#39;Customer&#39;:str,&#39;Machine&#39;:str,&#39;Month&#39;:str,&#39;sector&#39;:str, &#39;region&#39;:str,&#39;Stock machine&#39;:str}          #df = df. astype(convert_dict) df. dtypes  Customer      objectMachine       objectMonth        objectYear         int64Sector       objectRegion       objectPrevious machine   int64Stock machine    objectdtype: object        print(&quot; Number of machines sold in 2018:&quot;,df[&#39;Machine&#39;]. where(df. Year==2018). count())   Number of machines sold in 2018: 0        print(&quot;Number of machines sold in 2019:&quot;,df[&#39;Machine&#39;]. where(df. Year==2019). count())print(&quot;\nDifferent machines sold in 2019:&quot;)df[&#39;Machine&#39;]. where(df. Year==2019). value_counts()  Number of machines sold in 2019: 6Different machines sold in 2019:VF-4   3VF-2   2ST 20Y  1Name: Machine, dtype: int64        print(&quot;Number of machines sold in 2020:&quot;,df[&#39;Machine&#39;]. where(df. Year==2020). count(),&quot;*&quot;)print(&quot;\nDifferent machines sold in 2020:\n&quot;)print(df[&#39;Machine&#39;]. where(df. Year==2020). value_counts())print(&quot;\n* Made till end of February&quot;)  Number of machines sold in 2020: 2 *Different machines sold in 2020:VF-4  1VF-2  1Name: Machine, dtype: int64* Made till end of february        print(&quot; Total number of machines sold:&quot;,df[&#39;Machine&#39;]. count())   Total number of machines sold: 8        print(&quot;Different machines sold:&quot;)df. groupby(&#39;Year&#39;)[&#39;Machine&#39;]. value_counts()  Different machines sold:Year Machine2019 VF-4    3   VF-2    2   ST 20Y   12020 VF-2    1   VF-4    1Name: Machine, dtype: int64  I have been part of manav marketing since 2018 september that means I have been in company for 4 months in 2018. I have sold 6 machines in 2019 and 2 machine in 2020. The most sold machine is VF-4.       #df. groupby([&#39;Year&#39;])[&#39;Machine&#39;]. transform(&#39;count&#39;)          import matplotlib. pyplot as plt; plt. rcdefaults()#import numpy as npimport matplotlib. pyplot as pltobjects = (&#39;2018&#39;,&#39;2019&#39;,&#39;2020&#39;)y_pos = df[&#39;Yearly sales&#39;]#performance = [10,8,6,4,2,1]plt. bar(y_pos,objects, align=&#39;center&#39;, alpha=0. 5)plt. xticks(y_pos, df[&#39;Yearly sales&#39;])plt. ylabel(&#39;Numbers&#39;)plt. title(&#39;Sales&#39;)plt. show()  ---------------------------------------------------------------------------KeyError                 Traceback (most recent call last)~\Anaconda3\lib\site-packages\pandas\core\indexes\base. py in get_loc(self, key, method, tolerance)  3062       try:-&gt; 3063         return self. _engine. get_loc(key)  3064       except KeyError:pandas\_libs\index. pyx in pandas. _libs. index. IndexEngine. get_loc()pandas\_libs\index. pyx in pandas. _libs. index. IndexEngine. get_loc()pandas\_libs\hashtable_class_helper. pxi in pandas. _libs. hashtable. PyObjectHashTable. get_item()pandas\_libs\hashtable_class_helper. pxi in pandas. _libs. hashtable. PyObjectHashTable. get_item()KeyError: &#39;Yearly sales&#39;During handling of the above exception, another exception occurred:KeyError                 Traceback (most recent call last)&lt;ipython-input-14-069cd91e5a2d&gt; in &lt;module&gt;()   4    5 objects = (&#39;2018&#39;,&#39;2019&#39;,&#39;2020&#39;)----&gt; 6 y_pos = df[&#39;Yearly sales&#39;]   7 #performance = [10,8,6,4,2,1]   8 ~\Anaconda3\lib\site-packages\pandas\core\frame. py in __getitem__(self, key)  2683       return self. _getitem_multilevel(key)  2684     else:-&gt; 2685       return self. _getitem_column(key)  2686  2687   def _getitem_column(self, key):~\Anaconda3\lib\site-packages\pandas\core\frame. py in _getitem_column(self, key)  2690     # get column  2691     if self. columns. is_unique:-&gt; 2692       return self. _get_item_cache(key)  2693  2694     # duplicate columns &amp; possible reduce dimensionality~\Anaconda3\lib\site-packages\pandas\core\generic. py in _get_item_cache(self, item)  2484     res = cache. get(item)  2485     if res is None:-&gt; 2486       values = self. _data. get(item)  2487       res = self. _box_item_values(item, values)  2488       cache[item] = res~\Anaconda3\lib\site-packages\pandas\core\internals. py in get(self, item, fastpath)  4113  4114       if not isna(item):-&gt; 4115         loc = self. items. get_loc(item)  4116       else:  4117         indexer = np. arange(len(self. items))[isna(self. items)]~\Anaconda3\lib\site-packages\pandas\core\indexes\base. py in get_loc(self, key, method, tolerance)  3063         return self. _engine. get_loc(key)  3064       except KeyError:-&gt; 3065         return self. _engine. get_loc(self. _maybe_cast_indexer(key))  3066  3067     indexer = self. get_indexer([key], method=method, tolerance=tolerance)pandas\_libs\index. pyx in pandas. _libs. index. IndexEngine. get_loc()pandas\_libs\index. pyx in pandas. _libs. index. IndexEngine. get_loc()pandas\_libs\hashtable_class_helper. pxi in pandas. _libs. hashtable. PyObjectHashTable. get_item()pandas\_libs\hashtable_class_helper. pxi in pandas. _libs. hashtable. PyObjectHashTable. get_item()KeyError: &#39;Yearly sales&#39;        df[&#39;Yearly sales&#39;]=df. groupby([&#39;Year&#39;])[&#39;Machine&#39;]. transform(&#39;count&#39;)          df. plot. bar(x={&#39;2018&#39;,&#39;2019&#39;,&#39;2020&#39;},y=&#39;Yearly sales&#39;,rot=0)plt. show()    "
    }, {
    "id": 5,
    "url": "https://sharan19.github.io/2020/02/27/Test-Document.html",
    "title": "Test Document",
    "body": "2020/02/27 - Test Document Be Kind "
    }, {
    "id": 6,
    "url": "https://sharan19.github.io/fastpages/markdown/2020/01/14/test-markdown-post.html",
    "title": "Example Markdown Post",
    "body": "2020/01/14 - Basic setup: Jekyll requires blog post files to be named according to the following format: YEAR-MONTH-DAY-filename. md Where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, and filename is whatever file name you choose, to remind yourself what this post is about. . md is the file extension for markdown files. The first line of the file should start with a single hash character, then a space, then your title. This is how you create a “level 1 heading” in markdown. Then you can create level 2, 3, etc headings as you wish but repeating the hash character, such as you see in the line ## File names above. Basic formatting: You can use italics, bold, code font text, and create links. Here’s a footnote 1. Here’s a horizontal rule: Lists: Here’s a list:  item 1 item 2And a numbered list:  item 1 item 2Boxes and stuff:  This is a quotation    You can include alert boxes…and…    You can include info boxesImages: Code: General preformatted text: # Do a thingdo_thing()Python code and output: # Prints '2'print(1+1)2Tables:       Column 1   Column 2         A thing   Another thing   Tweetcards: Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019Footnotes:       This is the footnote.  &#8617;    "
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