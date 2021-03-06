var my_news = [
	{
		author: 'Саша Печкин',
		text: 'В четверг, четвертого числа...',
		bigText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do'
	},
	{
		author: 'Просто Вася',
		text: 'Считаю, что $ должен стоить 8грн!',
		bigText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do'
	},
	{
		author: 'Гость',
		text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
		bigText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do'
	},
	{
		author: 'LOL',
		text: 'Best portal',
		bigText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do'
	}
];
var Article = React.createClass({
	propTypes: {
		data: React.PropTypes.shape({
			author: React.PropTypes.string.isRequired,
			text: React.PropTypes.string.isRequired,
			bigText: React.PropTypes.string.isRequired,
		})
	},
	getInitialState: function() {
		return {visible: false}
	},
	readmoreClick: function(e) {
		e.preventDefault();
		this.setState({visible: true});
	},
	render: function() {
    	var author = this.props.data.author,
    	    text = this.props.data.text,
    	    bigText = this.props.data.bigText,
    	    visible = this.state.visible;
    	return (
    	  <div className="article">
    	    <p className="news__author">{author}:</p>
    	    <p className="news__text">{text}</p>
    	    <a href="#" onClick={this.readmoreClick} className={'news__readmore ' + (visible ? 'none': '')}>
    	    	More...
    	    </a>
    	    <p className={'news__big-text ' + (visible ? '': 'none')}>
    	    	{bigText}
    	    </p>
    	  </div>
    	)
  	}
});
var News = React.createClass({
	propTypes: {
		data: React.PropTypes.array.isRequired
	},
	render: function() {
		var data = this.props.data;
		var newsTemplate;
		if (data.length > 0) {
  			newsTemplate = data.map(function(item, index) {
				return (
      				<div key={index}>
       					<Article data={item} />
      				</div>
    			)
			})
		} else {
			newsTemplate = <p>К сожалению новостей нет</p>
}

		return (
			<div className="news">
				{newsTemplate}
				<strong className={'news__count ' + (data.length > 0 ? '':'none')}>
					Всего новостей: {data.length}
				</strong>
			</div>
		); 
	}
});
var Add = React.createClass({
	getInitialState: function() {
		return {
			agreeNotChecked: true,
    		authorIsEmpty: true,
    		textIsEmpty: true
		};
	},
	componentDidMount: function() {
		ReactDOM.findDOMNode(this.refs.author).focus();
	},
	onBtnClickHandler: function(e) {
		e.preventDefault();
		var author = ReactDOM.findDOMNode(this.refs.author).value;
		var text = ReactDOM.findDOMNode(this.refs.text).value;
		alert(author + '\n' + text);
	},
	onCheckRuleClick: function(e) {
		this.setState({agreeNotChecked: !this.state.agreeNotChecked});
	},
	onFieldChange: function(fieldName, e) {
		if (e.target.value.trim().length > 0) {
			this.setState({[''+fieldName]:false})
		} else {
			this.setState({[''+fieldName]:true})
		}
	},
	render: function() {
		var agreeNotChecked = this.state.agreeNotChecked,
        	authorIsEmpty = this.state.authorIsEmpty,
        	textIsEmpty = this.state.textIsEmpty;
		return (
			<form className='add'>
				<input
					type='text'
					className='add__author'
					onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
					placeholder='Ваше имя'
					ref='author'
				/>
				<textarea
					className='add__text'
					onChange={this.onFieldChange.bind(this, 'textIsEmpty')} 
					placeholder='Текст новости'
					ref='text'>
				</textarea>
				<label className='add__checkrule'>
					<input type='checkbox' ref='checkrule' onChange={this.onCheckRuleClick}/>Я согласен с правилами
				</label>
				<button
					className='add__btn'
					onClick={this.onBtnClickHandler}
					ref='alert_button'
					disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}
				>
					Показать alert
				</button>
			</form>
		);
	}
});
var App = React.createClass({
	getInitialState: function() {
    	return {
			news: my_news
    	};
	},
  	componentDidMount: function() {
  	  /* Слушай событие "Создана новость"
  	    если событие произошло, обнови this.state.news
  	  */
  	},
	componentWillUnmount: function() {
    /* Больше не слушай событие "Создана новость" */
	},
	render: function() {
		console.log('render');
		return (
			<div className='app'>
				<Add />
				<h3>Новости</h3>
				<News data={this.state.news} />
			</div>
		);
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
);


		
