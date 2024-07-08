import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <section>
        <h2>L'impression 3D qu’est-ce que c’est ? </h2>
        <p>
          C’est un procédé de fabrication de pièces en volume, rendu possible
          par l’agglomération de matière par empilement de couches successives.
          L'objet 3D est tout d’abord dessiné grâce à un outil de conception
          assistée par ordinateur (CAO). Le fichier 3D obtenu est traité par un
          logiciel spécifique qui organise le découpage en tranches des
          différentes couches nécessaires à la réalisation de la pièce. Le
          découpage est envoyé à l'imprimante 3D qui dépose ou solidifie la
          matière couche par couche jusqu'à obtenir la pièce finale. Pour se
          faire, nous avons un plateau d’impression sur lequel est imprimé une
          pièce, une bobine de filament plastique qui sert de matériau
          d’impression et une tête d’extrusion également appelé extrudeur. Pour
          résumer, le filament est entraîné et fondu par l’extrudeur de
          l’imprimante 3D, celui-ci dépose le matériau de manière précise couche
          par couche sur le plateau.
        </p>
      </section>
      <section>
        <h2>A quoi ça sert ?</h2>
        <p>
          <h3>Fabrication de pièces uniques</h3>
          L’impression 3D permet d’obtenir une pièce conçue et réalisée rien que
          pour vous.
        </p>
        <p>
          <h3>Réparation de pièces</h3>
          l’impression 3D vous permet de recréer une pièce cassée ou perdue, qui
          n’est pas ou plus disponible à l’achat ou bien trop coûteuse.
        </p>
        <p>
          <h3>Petites séries de fabrication </h3>
          l’impression 3D peut être la solution pour produire une petite série
          de pièces à moindre coût. Utile par exemple pour le lancement d’un
          nouveau produit, pour tester le marché.
        </p>
        <p>
          <h3>Prototypage </h3>
          L’impression 3D vous permet de réaliser un prototype afin de valider
          la fonctionnalité et le design d’une pièce avant production.
        </p>
      </section>
      <section>
        <h2>Matériaux</h2>
        <p>
          <h3>Quels-sont les matériaux utilisés ?</h3>
          Nos imprimantes proposent essentiellement de l'impression de matière
          plastique. Toutefois, nous pouvons associer d’autres matières dans la
          réalisation finale du produit : bois, LED, matière végétale… Les
          demandes spécifiques seront étudiées lors de la prise de contact. Pour
          les demandes spécifiques merci de le détailler dans le mail.
        </p>
        <p>
          <h3>Nos plastiques d'impression </h3>Biodégradables Rigides ou
          flexibles (pour une coque de téléphone par exemple) Large choix de
          couleurs Aspect brillant, mat, fluorescent, phosphorescent ou
          translucide (Attention : nous ne pouvons pas faire de transparent)
          Aspect bois Haute résistance mécanique Conducteur électrique
          Conducteur électrique
        </p>
      </section>
    </div>
  );
}
export default About;
