import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Category from './Category'

const useStyles = theme => ({
  root: {
  },

});

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      DomainNo: ""
    };
  }


  render() {
    const { classes } = this.props;

    const openFeedPage = (Domain) => {
      this.setState({
        DomainNo: Domain
      });
      window.location = "/communityDashboard/Feed/" + Domain
    }

    return (



      <div style={{ width: '84%' }}>
        <div style={{ height: '100', display: 'block', width: '100%' }}>
          <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around', minWidth: '100%', height: '100%' }}>
            <Category name="Agriculture" img={"https://researchmatters.in/sites/default/files/styles/large_800w_scale/public/hope-3467922_1280.jpg?itok=_p0wPHqP"}/>
            <Category name="Artificial Intelligence" img={"https://maximizedigital.com/wp-content/uploads/2020/02/artificial-intelligence.jpg"} />
            <Category name="Art and Photography" img={"https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg"}/>
            <Category name="Education" img={"https://www.arcgis.com/sharing/rest/content/items/6c036c09c490450db100cbf867c7688a/resources/1571940616424.png?w=3340"}/>
            <Category name="Fashion" img={"https://4.bp.blogspot.com/-60jlAXOoBdo/WB7QeKzxRoI/AAAAAAAAEy8/MD_oJlqeVh437Fs1KpEFgETB3YykM4swACLcB/s1600/fashion-trends-in-India.jpg"}/>
            <Category name="Food and Beverages" img={"https://www.azom.com/images/Article_Images/ImageForArticle_18224(1).jpg"}/>
            <Category name="Heathcare" img={"https://www.prometheusresearch.com/wp-content/uploads/2019/06/10-Healthcare-Quality-Improvement-Trends-You-Can%E2%80%99t-Ignore.jpg"}/>
            <Category name="Marketing" img={"https://lh3.googleusercontent.com/proxy/qcKlfDLJlChQLsIJVhOeY_4SFWg1zcKSHiCe2bZ74vbvJGag6vgdu5Q39eotNbjt0uAvRagScIyAmqxE_rW_7lKCf__m4JFZSOcxl_RQripvI3miiXA_2airJlhWC7hz23qjEg"}/>
            <Category name="Sports" img={"https://www.adexchanger.com/wp-content/uploads/2020/04/sports-marketing-1.jpg"}/>
            <Category name="Other" img={"https://img.pngio.com/other-png-3-png-image-other-png-1024_512.png"}/>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(useStyles)(Categories);