module.exports = (sequelize, DataTypes) => {
  const ServiceRequest = sequelize.define('ServiceRequest', {
    targetName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'target_name'
    },
    socialMedia: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'social_media'
    },
    targetDescription: {
      type: DataTypes.TEXT,
      field: 'target_description'
    },
    siteUrls: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'site_urls',
      get() {
        return JSON.parse(this.getDataValue('siteUrls'));
      },
      set(val) {
        this.setDataValue('siteUrls', JSON.stringify(val));
      }
    },
    siteDescription: {
      type: DataTypes.TEXT,
      field: 'site_description'
    }
  }, {
    tableName: 'service_requests',
    underscored: true
  });
  return ServiceRequest;
};