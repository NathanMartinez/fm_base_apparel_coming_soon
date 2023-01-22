import ghpages from 'gh-pages'

ghpages.publish(
	'public',
	{
		branch: 'main',
		repo: 'https://github.com/NathanMartinez/fm_base_apparel_coming_soon',
		user: {
			name: 'Nathan Martinez',
			email: 'natedzmtz@yahoo.com',
		},
	},
	() => {
		console.log('Deploy Complete!')
	}
)
