import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Asset } from './entities/asset.entity';

@Injectable()
export class AssetsService {
    constructor(@InjectModel(Asset.name) private assetSchema: Model<Asset>) {}

    create(createAssetDto: CreateAssetDto) {
        return this.assetSchema.create(createAssetDto);
    }

    findAll() {
        return this.assetSchema.find();
    }

    findOne(symbol: string) {
        return this.assetSchema.findOne({ symbol });
    }

    update(symbol: string, updateAssetDto: UpdateAssetDto) {
        return this.assetSchema.updateOne({ symbol }, { $set: updateAssetDto });
    }

    remove(symbol: string) {
        return this.assetSchema.deleteOne({ symbol });
    }
}
