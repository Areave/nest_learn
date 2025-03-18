import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Patch, Post } from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find.top-page.dto';
import { ConfigService } from '@nestjs/config';

@Controller('page')
export class TopPageController {
	constructor(private readonly congigService: ConfigService) {

	}
	
	@Post('create')
	async create(@Body() dto: Omit<TopPageModel, '_id'>) {
		this.congigService.get('TEST');
	}

	@Get(':id')
	async get(@Param('id') id: string) {
		
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {

	}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: TopPageModel) {

	}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindTopPageDto) {

	}
}

