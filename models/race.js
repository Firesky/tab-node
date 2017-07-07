module.exports = function(sequelize, DataTypes) {
	return sequelize.define('race', {
		meetingDate: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	link: {
		type: DataTypes.STRING,
		allowNull: false
	},
	location: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	venue: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	raceType: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	raceNumber: {
		type: DataTypes.NUMERIC,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	before_Json: {
		type: DataTypes.STRING
	},
	after_Json: {
		type: DataTypes.STRING
	}
	});
};