import React from 'react'
import { List, Label, Tab } from 'semantic-ui-react'
import ScrollableAnchor from 'react-scrollable-anchor'

const panes = [
	{ menuItem: 'Groupr', 
		render: () => 
		<Tab.Pane>
			Groupr Content
		</Tab.Pane> 
	},
	{ menuItem: 'Argo', 
		render: () => 
		<Tab.Pane>
			Argo Content
		</Tab.Pane> 
	},
	{ menuItem: 'Twitter', 
		render: () => 
		<Tab.Pane>
			Twitter Content
		</Tab.Pane> 
	},
  { menuItem: 'Misc',
		render: () =>
		<Tab.Pane>
			<p>This tab has a complex content</p>
			<List>
				<List.Item>Apples</List.Item>
				<List.Item>Pears</List.Item>
				<List.Item>Oranges</List.Item>
			</List>
		</Tab.Pane>
	},
]

const Portfolio = () => {
  return (
	
		<ScrollableAnchor id={'portfolio'}>
		<Tab panes={panes} />
		</ScrollableAnchor>
	);
}

export default Portfolio

