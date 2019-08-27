import React from 'react';
import Modal from 'react-modal';

// Components
import Layout from '../components/layout';
import SEO from '../components/seo';
import HeroText from '../components/heroText/heroText';
import Amiga from '../components/amiga';
import ForgeBox from '../components/softwareBox/boxes/forgeBox';
import ForgeModalContent from '../components/modalContent/forge';

// Styles
import styles from './index.module.css';

Modal.setAppElement('#___gatsby');

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedLink: null,
      modalOpen: false,
      modalForgeOpen: false,
    };
  }

  handleHighlightChange = (newHighlight) => {
    const { highlightedLink: previousHighlight } = this.state;
    if (previousHighlight !== newHighlight) {
      this.setState({ highlightedLink: newHighlight });
    }
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  }

  handleBoxClick = (boxID) => {
    this.setState({
      modalOpen: true,
      modalContent: this.getModalContent(boxID),
    });
  }

  getModalContent = (boxID) => {
    switch (boxID) {
      case 'forge':
        this.setState({ modalForgeOpen: true });
        return <ForgeModalContent />;
      default:
        return null;
    }
  }

  render() {
    return (
      <Layout includeHeader={false}>
        <div className={styles.test} />
        <SEO title="Zach Kuzmic - Home" keywords={['Zach Kuzmic', 'Front End Engineer', 'UX', 'Design', 'react']} />
        <div className={styles.heroWrapper}>
          <HeroText
            onHighlightChange={this.handleHighlightChange}
            highlightedLink={this.state.highlightedLink}
          />
          <Amiga
            highlightedLink={this.state.highlightedLink}
          />
        </div>
        <p style={{ marginTop: 24, fontSize: 14, textAlign: 'center' }}>I'll be updating this site with some examples of my work soon.</p>
        <ForgeBox
          onClick={this.handleBoxClick}
          selected={this.state.modalForgeOpen}
        />
        <Modal
          isOpen={this.state.modalOpen}
          className={styles.modalContent}
          overlayClassName={{
            base: styles.modalOverlay,
            afterOpen: styles.modalOverlay_afterOpen,
            beforeClose: styles.modalOverlay_beforeClose,
          }}
          contentLabel="Example Modal"
          closeTimeoutMS={600}
        >
          { this.state.modalContent }
        </Modal>
      </Layout>
    );
  }
}

export default IndexPage;
