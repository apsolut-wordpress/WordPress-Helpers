/**
 * AP Simple Block
 */
 wp.blocks.registerBlockType('applugin/ap-simple-block',{
    title: 'AP Simple Block',
    icon: 'smiley',
    category: 'common',  // layout, typography
    attributes: {
        skyColor: {type: 'string'},
        grassColor: {type: 'string'},
    },
    edit: function (props) {
        function updateSkyColor(event) {
            props.setAttributes({
                skyColor: event.target.value
            })
        }
        function updateGrassColor(event) {
            props.setAttributes({
                grassColor: event.target.value
            })
        }
        return (
            <div>
                <input type="text" placeholder="sky color"  value={props.attributes.skyColor} onChange={updateSkyColor}/>
                <input type="text" placeholder="grass color" value={props.attributes.grassColor} onChange={updateGrassColor}/>
            </div>
        )
    },
    save: function(props) {
        return (
            <div>
                <p>Front V2. {props.attributes.grassColor}</p>
            </div>
        )
    },
    deprecated: [ {
        attributes: {
            skyColor: {type: 'string'},
            grassColor: {type: 'string'},
        },
        save: function(props) {
            return (
                <div>
                    <p>Front. {props.attributes.grassColor}</p>
                </div>
            )
        }
    }]
})