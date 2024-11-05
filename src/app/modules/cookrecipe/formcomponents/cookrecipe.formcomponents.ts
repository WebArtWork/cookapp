export const cookrecipeFormComponents = {
	formId: 'cookrecipe',
	title: 'Cookrecipe',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill cookrecipe title',
				},
				{
					name: 'Label',
					value: 'Title',
				}
			]
		},
		{
			name: 'Text',
			key: 'description',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill cookrecipe description',
				},
				{
					name: 'Label',
					value: 'Description',
				}
			]
		}
	]
}
